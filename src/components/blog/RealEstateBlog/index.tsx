import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  max-width: 750px;
  margin: 0 auto;
  padding-top: 32px;
  padding-bottom: 32px;
  display: grid;
  gap: 24px;
`

const AuthorBox = styled.div`
  color: grey;
`

const Title = styled.h1`
  font-size: 56px;
  margin: 0;
`

const Author = styled.p`
  font-size: 16px;
  font-style: italic;
  font-family: serif;
  margin: 0 0 12px 0;
`
const Date = styled.p`
  font-size: 12px;
  font-family: monospace;
  margin: 0;
`

const QuoteNode = styled.p`
  font-size: 24px;
  line-height: 1.58;
  font-style: italic;
  margin: 0;
`

const ParagraphNode = styled.p`
  font-size: 18px;
  line-height: 1.68;
  margin: 0;
`

const ImageNode = styled.img`
  width: 100%;
  height: auto;
  margin: 0;
`

export default function index({ title, author, date, content }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <AuthorBox>
        <Author>{author}</Author>
        <Date>{date}</Date>
      </AuthorBox>
      {content.map(i => {
        if (i.node === "paragraph") {
          return <ParagraphNode>{i.value}</ParagraphNode>
        }
        if (i.node === "image") {
          return <ImageNode src={i.value}></ImageNode>
        }
        if (i.node === "quote") {
          return <QuoteNode>{i.value}</QuoteNode>
        }
        return <span></span>
      })}
    </Wrapper>
  )
}
