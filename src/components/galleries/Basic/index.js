import React, { useState } from "react"
import styled from "styled-components"

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
const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 600px;
  object-fit: cover;
  transform: ${(props) => (props.zoomed ? "scale(1.3)" : "scale(1.0)")};
  transition: all 0.25s ease;
`
const Controls = styled.div`
  display: flex;
  justify-content: space-between;
`

const Counter = styled.p`
  color: white;
  margin: 0;
  padding: 16px;
  font-size: 12px;
`
const Button = styled.button`
  padding: 16px;
  color: white;
  background: none;
  border: none;
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 1.6px;
`

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
`
const ArrowLeft = styled.div`
  position: absolute;
  padding: 32px 16px;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
  background: rgba(0, 0, 0, 0.5);
  top: 200px;
  left: 0;
  color: white;
  font-size: 24px;
  font-weight: bold;
`
const ArrowRight = styled.div`
  position: absolute;
  padding: 32px 16px;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
  background: rgba(0, 0, 0, 0.5);
  top: 200px;
  right: 0;
  color: white;
  font-size: 24px;
  font-weight: bold;
`
export default function index({ images }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [current, setcurrent] = useState(0)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [zoomed, setZoomed] = useState(false)
  const nextImage = () => {
    if (current === images.length - 1) {
      setcurrent(0)
    } else {
      setcurrent(current + 1)
    }
  }
  const previousImage = () => {
    if (current === 0) {
      setcurrent(images.length - 1)
    } else {
      setcurrent(current - 1)
    }
  }

  const toggleZoomedState = () => setZoomed(!zoomed)

  return (
    <Gallery>
      <Container>
        <Controls>
          <Counter>
            {current + 1} / {images.length}
          </Counter>
          <Button onClick={toggleZoomedState}>
            {zoomed ? "Zoom out" : "Zoom in"}
          </Button>
        </Controls>
        <ImageContainer>
          <Image zoomed={zoomed} src={images[current]} />
          <ArrowLeft onClick={previousImage}>{"<"}</ArrowLeft>
          <ArrowRight onClick={nextImage}>{">"}</ArrowRight>
        </ImageContainer>
      </Container>
    </Gallery>
  )
}
