import React from "react"
import styled from "styled-components"

const Card = styled.div`
  margin: 16px auto 16px auto;
  padding: 16px;
  border: 1px solid darkgray;
  max-width: 800px;
  display: flex;
  border-radius: 2px;
`

const Left = styled.div`
  padding: 8px;
  flex: 4;
`

const Title = styled.h1`
  font-size: 32px;
  margin: 0 0 12px 0;
`

const Right = styled.div`
  display: flex;
  border-left: 2px solid blue;
  flex: 2;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    display: none;
  }
`

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  background: blue;
  padding: 4px;
`
const AuthorMini = styled.div`
  display: flex;
  align-items: center;
`

const AvatarMini = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
`

const AuthorMiniText = styled.p`
  margin-left: 8px;
  color: grey;
  font-size: 16px;
`

const AuthorName = styled.h3``
const AuthorFollowButton = styled.a`
  background: blue;
  border-radius: 2px;
  color: white;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
`

const Paragraph = styled.p`
  margin: 0 0 12px 0;
  line-height: 1.55;
`
const Tagline = styled.p`
  padding: 4px 8px;
  color: grey;
  margin: 0 0 12px 0;
  background: #f3f3f3;
  display: inline-block;
`
interface IProps {
  authorSrc: string
  authorName: string
  title: string
  tagline: string
  text: string
}
export default function index({
  authorSrc,
  authorName,
  title,
  tagline,
  text,
}: IProps) {
  return (
    <Card>
      <Left>
        <Tagline>{tagline}</Tagline>
        <Title>{title}</Title>
        <AuthorMini>
          <AvatarMini src={authorSrc} />
          <AuthorMiniText>{authorName}</AuthorMiniText>
        </AuthorMini>
        <Paragraph>{text}</Paragraph>
      </Left>
      <Right>
        <Avatar src={authorSrc} />
        <AuthorName>{authorName}</AuthorName>
        <AuthorFollowButton>+ follow</AuthorFollowButton>
      </Right>
    </Card>
  )
}
