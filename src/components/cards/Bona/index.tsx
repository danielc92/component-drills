import React from "react"
import styled from "styled-components"

const Card = styled.div`
  width: 240px;
  border: 1px solid #f2f2f2;
  border-radius: 2px;
  box-shadow: 2px 2px 6px lightgray;
`

const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 160px;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`

const Avatar = styled.img`
  object-fit: cover;
  object-position: 50% 50%;

  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  bottom: -25px;
  padding: 3px;
  background: #fff;
  left: 42%;
`
const CardContent = styled.div`
  padding: 40px 16px 32px 16px;
`

const Title = styled.h4`
  text-align: center;
  margin: 0;
`

const CardFooter = styled.div`
  display: flex;
  color: rgba(0, 0, 0, 0.6);
  background: rgba(0, 0, 0, 0.05);
  justify-content: space-evenly;
`

const CardFooterItem = styled.div`
  display: flex;
  padding: 12px;
  align-items: center;
  font-size: 12px;
`

const FooterIcon = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 8px;

  svg {
    color: red;
  }
`

interface IProps {
  title: string
  authorImageSrc: string
  backgroundImageSrc: string
  viewImageSrc: string
  commentImageSrc: string
  heartImageSrc: string
  statLove: string
  statComment: string
  statView: string
}
export default function index({
  title,
  authorImageSrc,
  backgroundImageSrc,
  viewImageSrc,
  commentImageSrc,
  heartImageSrc,
  statLove,
  statComment,
  statView,
}: IProps) {
  return (
    <Card>
      <ImageWrapper>
        <Image src={backgroundImageSrc}></Image>
        <Avatar src={authorImageSrc}></Avatar>
      </ImageWrapper>

      <CardContent>
        <Title>{title}</Title>
      </CardContent>

      <CardFooter>
        <CardFooterItem>
          <FooterIcon src={viewImageSrc} />
          {statLove}
        </CardFooterItem>

        <CardFooterItem>
          <FooterIcon src={heartImageSrc} />
          {statView}
        </CardFooterItem>
        <CardFooterItem>
          <FooterIcon src={commentImageSrc} />
          {statComment}
        </CardFooterItem>
      </CardFooter>
    </Card>
  )
}
