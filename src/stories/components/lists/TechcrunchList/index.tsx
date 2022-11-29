import React from "react"
import styled from "styled-components"

const Container = styled.div`
  max-width: 750px;
`

const Article = styled.section`
  display: grid;
  padding: 16px 0;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  border-top: 2px solid #f8f8f8;
`

const Column = styled.div``

const Title = styled.h3`
  margin: 0;
`

const Author = styled.p`
  font-weight: bold;
  font-size: 12px;
`

const Timestamp = styled.p`
  font-size: 12px;
  color: grey;
`

const Paragraph = styled.p`
  margin: 0;
  font-size: 14px;
  color: grey;
`

const Image = styled.img`
  width: 100%;
  height: auto;
`

interface IProps {
  articles: Array<{
    title: string
    author: string
    summary: string
    date: string
    image: string
  }>
}
export default function index({ articles }: IProps) {
  return (
    <Container>
      {articles.map((a) => (
        <Article>
          <Column>
            <Title>{a.title}</Title>
            <Author>{a.author}</Author>
            <Timestamp>{a.date}</Timestamp>
          </Column>
          <Column>
            <Paragraph>{a.summary}</Paragraph>
          </Column>
          <Column>
            <Image src={a.image} />
          </Column>
        </Article>
      ))}
    </Container>
  )
}
