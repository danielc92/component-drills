import styled from "styled-components"
import React from "react"

const Section = styled.section``

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 0;
`

const TileGrid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
`
const Tile = styled.div<{ background: string }>`
  text-align: center;
  background: ${(props) => (props.background ? props.background : "")};
  padding: 16px;
  border-radius: 4px;

`

const TileImage = styled.img`
  width: 65px;
  height: 65px;
`

const TileTitle = styled.h3`
  margin-bottom: 12px;
`

const TileText = styled.p`
  margin: 0;
  line-height: 1.6;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.56);
`
interface IProps {
  data: Array<{
    title: string
    text: string
    imageSrc: string
    background: string
  }>
}
export default function index({ data }: IProps) {
  return (
    <Section>
      (x){" "}
      <Container>
        <TileGrid>
          {data.map((x) => (
            <Tile background={x.background}>
              <TileImage src={x.imageSrc} />
              <TileTitle>{x.title}</TileTitle>
              <TileText>{x.text}</TileText>
            </Tile>
          ))}
        </TileGrid>
      </Container>
    </Section>
  )
}
