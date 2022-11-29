import React, { useState } from 'react'
import styled from 'styled-components'

const Gallery = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #282828;
  padding: 48px;
`
const Container = styled.div`
  max-width: 800px;
  background: #303030;
  margin: 0 auto;
`
const Image = styled.img<{ zoomed: boolean, grayscale: boolean }>`
  width: 100%;
  height: auto;
  max-height: 600px;
  object-fit: cover;
  transform: ${(props) => (props.zoomed ? 'scale(1.3)' : 'scale(1.0)')};
  transition: all 0.25s ease;
  filter: ${(props) => (props.grayscale ? 'grayscale()' : '')};
`
const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  display: flex;
  align-items: center;
`

const Counter = styled.p`
  color: white;
  margin: 0;

  font-size: 12px;
`
const Button = styled.button`
  padding: 8px;
  color: white;
  background: none;
  border: none;
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 1.6px;
  border: 1px solid #fff;
  margin-left: 8px;
`

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  cursor: zoom-in;
`
const ArrowLeft = styled.button`
  border: none;
  position: absolute;
  padding: 32px 16px;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
  background: rgba(0, 0, 0, 0.3);
  top: 35%;
  left: 0;
  color: white;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`
const ArrowRight = styled.button`
           border: none;
  position: absolute;
  padding: 32px 16px;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
  background: rgba(0, 0, 0, 0.3);
  top: 35%;
  right: 0;
  color: white;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`

interface IProps {
  images: any[]
}
export default function index ({ images }: IProps) {
  const [current, setcurrent] = useState(0)
  const [zoomed, setZoomed] = useState(false)
  const [grayscale, setGray] = useState(false)
  const nextImage = (): void => {
    if (current === images.length - 1) {
      setcurrent(0)
    } else {
      setcurrent(current + 1)
    }
  }
  const previousImage = (): void => {
    if (current === 0) {
      setcurrent(images.length - 1)
    } else {
      setcurrent(current - 1)
    }
  }

  const toggleZoomedState = () => setZoomed(!zoomed)
  const toggleGrayscaleState = () => setGray(!grayscale)

  return (
    <Gallery>
      <Container>
        <Controls>
          <Counter>
            {current + 1} / {images.length}
          </Counter>
          <div>
            <Button onClick={toggleZoomedState}>Toggle Zoom</Button>
            <Button onClick={toggleGrayscaleState}>Toggle Grayscale</Button>
          </div>
        </Controls>
        <ImageContainer>
          <Image
            onClick={toggleZoomedState}
            zoomed={zoomed}
            grayscale={grayscale}
            src={images[current]}
          />
          <ArrowLeft onClick={previousImage}>{'<'}</ArrowLeft>
          <ArrowRight onClick={nextImage}>{'>'}</ArrowRight>
        </ImageContainer>
      </Container>
    </Gallery>
  )
}
