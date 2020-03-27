import styled from "styled-components"
import React from "react"

const Layout = styled.div`
  display: flex;
  margin-bottom: 10px;
`

const VideoThumbnail = styled.div`
  background-image: url(${props => props.imageSrc});
  background-size: cover;
  width: 140px;
  height: 90px;
  position: relative;
`

const VideoTime = styled.div`
  position: absolute;
  bottom: 2px;
  right: 2px;
  background: rgba(0, 0, 0, 0.75);
  font-size: 8px;
  padding: 3px;
  color: white;
`

const Content = styled.div`
  padding: 8px;
`

const Title = styled.h5`
  margin-top: 0;
  margin-bottom: 4px;
`

const Text = styled.p`
  color: grey;
  font-size: 10px;
  margin-bottom: 4px;
  margin-top: 0px;
`

const Tag = styled.p`
  margin: 0;
  background: #f3f3f3;
  padding: 2px 6px;
  font-size: 8px;
  border-radius: 2px;
  display: inline-block;
  font-weight: bold;
  color: ;
`

export default function index({ imageSrc, time, title, studio }) {
  return (
    <Layout>
      <VideoThumbnail imageSrc={imageSrc}>
        <VideoTime>{time}</VideoTime>
      </VideoThumbnail>
      <Content>
        <Title>{title}</Title>
        <Text>{studio}</Text>
        <Text>Recommended for you</Text>
        <Tag>New</Tag>
      </Content>
    </Layout>
  )
}
