import React from "react"
import styled from "styled-components"

const Grid = styled.div<{ gapless: boolean }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: ${(props) => (props.gapless ? "" : "24px")};
  max-width: 800px;
`

const GridTile = styled.div<{
  backgroundColor: string
  doubleSize: boolean
  imageSrc: string
}>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  padding: 24px;
  line-height: 1.5;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: url(${(props) => (props.imageSrc ? props.imageSrc : "")});
  grid-row-start: ${(props) => (props.doubleSize ? "span 2" : "")};
  grid-column-start: ${(props) => (props.doubleSize ? "span 2" : "")};
`

const GridTitle = styled.h2`
  margin: 0 0 12px 0;
`

interface IProps {
  items: Array<{
    doubleSize: boolean
    color: string
    backgroundColor: string
    imageSrc: string
    title: string
    text: string
  }>
  gapless: boolean
}
export default function index({ items, gapless }: IProps) {
  return (
    <Grid gapless={gapless}>
      {items.map((i) => (
        <GridTile
          doubleSize={i.doubleSize}
          color={i.color}
          backgroundColor={i.backgroundColor}
          imageSrc={i.imageSrc}
        >
          <GridTitle>{i.title}</GridTitle>
          {i.text}
        </GridTile>
      ))}
    </Grid>
  )
}
