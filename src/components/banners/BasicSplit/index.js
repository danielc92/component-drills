import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const ImageWrapper = styled.div`
  flex: 1;
  flex-wrap: wrap;
  padding: 16px 8px;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 4px;
`

const Content = styled.div`
  padding: 40px;
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Header = styled.h1`
  margin: 0 0 24px;
  font-size: 48px;
`

const Paragraph = styled.p`
  margin: 0 0 24px 0;
  font-size: 18px;
  line-height: 1.45;
`

const Button = styled.a`
  border: 2px solid #3d3d3d;
  color: #3d3d3d;
  font-size: 18px;
  text-align: center;
  display: block;
  background-color: white;
  border-radius: 4px;
  padding: 16px 32px;
  transition: all 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    background-color: #3d3d3d;
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
