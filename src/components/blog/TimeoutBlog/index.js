import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  max-width: 750px;
  margin: 0 auto;
  padding-top: 32px;
  padding-bottom: 32px;
`

const Content = styled.div`
  padding: 0 60px;
  display: grid;
  gap: 24px;
`

const ParagraphNode = styled.p`
  font-size: 18px;
  line-height: 1.68;
  margin: 0;
`

const HeadingNode = styled.h3``

const Image = styled.div`
  position: relative;
  background-image: url(${(props) => props.imageSrc});
  height: 450px;
  background-size: cover;
  background-position: 50% 50%;
  margin-bottom: 24px;
`

const ImageText = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  background: #000;
  color: #fff;
  font-size: 10px;
  padding: 4px;
`

const Title = styled.h1`
  margin: 0 0 12px 0;
`

const AuthorWrapper = styled.div`
  padding: 12px 0;
  border-top: 4px solid #000;
  border-bottom: 2px solid #000;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;
`
const AuthorContent = styled.div`
  text-align: right;
`
const Author = styled.p`
  margin: 0 0 12px 0;
`

const Date = styled.p`
  margin: 0;
`

export default function index({
  title,
  author,
  date,
  content,
  imageText,
  imageSrc,
}) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <AuthorWrapper>
        <AuthorContent>
          <Author>
            By <strong>{author}</strong>
          </Author>
          <Date>Posted {date}</Date>
        </AuthorContent>
      </AuthorWrapper>
      <Image imageSrc={imageSrc}>
        <ImageText>{imageText}</ImageText>
      </Image>
      <Content>
        {content.map((i) => {
          if (i.node === "paragraph") {
            return <ParagraphNode>{i.value}</ParagraphNode>
          }
          if (i.node === "header") {
            return <HeadingNode>{i.value}</HeadingNode>
          }
          return <span></span>
        })}
      </Content>
    </Wrapper>
  )
}
