import React from 'react'
import styled from 'styled-components'

const Grid = styled.section`
  display: grid;
  grid-column-gap: 40px;
  grid-row-gap: 72px;
  max-width: 1100px;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
`

const Card = styled.div``

const Image = styled.a<{ src: string }>`
  display: block;
  cursor: pointer;
  height: 250px;
  background-size: cover;
  background-position: 50% 50%;
  background-image: url(${(props) => props.src});
  position: relative;
  margin: 0 0 12px 0;
`

const Overlay = styled.div`
  position: absolute;
  background: ${(props) => props.color};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.45;
`

const Info = styled.p`
  text-transform: uppercase;
  margin: 0 0 12px 0;
  font-family: monospace;
  color: grey;
  letter-spacing: 1.6px;
  font-size: 12px;
`

const Title = styled.a`
  display: block;
  margin: 0 0 12px 0;
  font-weight: bold;
  font-size: 18px;
  line-height: 1.5;
  cursor: pointer;
  :hover {
    color: blue;
  }
`

const Paragraph = styled.p`
  margin: 0;
  line-height: 1.5;
  color: grey;
`
interface IProps {
  cards: Array<{
    timestamp: string
    overlayColour: string
    text: string
    color?: string
    title: string
    image: string
  }>
}
export default function index ({ cards }: IProps) {
  return (
    <Grid>
      {cards.map((c) => (
        <Card>
          <Image src={c.image}>
            <Overlay color={c.overlayColour} />
          </Image>
          <Info>{c.timestamp}</Info>
          <Title>{c.title}</Title>
          <Paragraph>{c.text}</Paragraph>
        </Card>
      ))}
    </Grid>
  )
}
