import React from "react"
import styled from "styled-components"

const Card = styled.article`
  max-width: 400px;
  border: 1px solid #d2d2d2;
  overflow: hidden;
`

const Content = styled.div`
  padding: 24px;
  line-height: 1.5;
`
const Footer = styled.div`
  padding: 24px;
  background: #f6f6f6;
  color: grey;
  display: flex;
`
const Header = styled.div`
  padding: 24px;
  position: relative;
`
const HeaderDecoration = styled.div`
  width: 20px;
  height: 20px;
  background-color: #fff;
  position: absolute;
  bottom: -10px;
  left: 10%;
  transform: rotate(45deg);
  z-index: 50;
`
const StatContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
  font-size: 12px;
`
const StatIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 8px;
`
interface IProps {
  summary: string
  title: string
  linkText: string
  linkUrl: string
  timestamp: string
  commentCount: string
  imageSrc: string
  statSrc: string
  timestampSrc: string
}

const ImageWrapper = styled.div`
  overflow: hidden;
`
const Image = styled.img`
  width: 100%;
  height: auto;
  transition: 0.3s ease;

  :hover {
    transform: scale(1.1);
  }
`

const Button = styled.a`
  color: #1dd680;
  text-decoration: none;
  cursor: pointer;
`

const Title = styled.a`
  color: black;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: #1dd680;
  }
`

export default function index({
  summary,
  title,
  linkText,
  linkUrl,
  timestamp,
  commentCount,
  imageSrc,
  statSrc,
  timestampSrc,
}: IProps) {
  return (
    <Card>
      <Header>
        <Title href="#">{title}</Title>
        <HeaderDecoration />
      </Header>
      <ImageWrapper>
        <Image src={imageSrc} />
      </ImageWrapper>

      <Content>
        <p>{summary}</p>
        <Button href={linkUrl}>{linkText}</Button>
      </Content>
      <Footer>
        <StatContainer>
          <StatIcon src={timestampSrc} />
          {timestamp}
        </StatContainer>
        <StatContainer>
          <StatIcon src={statSrc} />
          {commentCount}
        </StatContainer>
      </Footer>
    </Card>
  )
}
