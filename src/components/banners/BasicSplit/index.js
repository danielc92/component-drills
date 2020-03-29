import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`
const ImageWrapper = styled.div`
  flex: 1;
  flex-wrap: wrap;
`
const Image = styled.img`
  width: 100%;
  max-height: 350px;
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 4px;
  box-shadow: 5px 5px 5px 2px #d3d3d3;
`

const Content = styled.div`
  padding: 32px;
  flex: 1;
`

const Header = styled.h1`
  margin: 0 0 24px;
`

const Paragraph = styled.p`
  margin: 0 0 24px 0;
  font-size: 18px;
  line-height: 1.45;
`

const Button = styled.a`
  border: 1px solid #37bace;
  color: #37bace;
  font-size: 18px;
  text-align: center;
  display: block;
  background-color: white;
  border-radius: 4px;
  padding: 16px;
  transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
  box-shadow: 5px 5px 5px 2px #d3d3d3;

  :hover {
    background-color: #37bace;
    color: white;
  }
`

export default function index({ title, subTitle, buttonText, imageSrc }) {
  return (
    <Wrapper>
      <Content>
        <Header>{title}</Header>
        <Paragraph>{subTitle}</Paragraph>
        <Button>{buttonText}</Button>
      </Content>
      <ImageWrapper>
        <Image src={imageSrc} />
      </ImageWrapper>
    </Wrapper>
  )
}
