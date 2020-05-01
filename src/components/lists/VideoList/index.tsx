import styled from "styled-components"
import React from "react"

const VideoItem = styled.div`
  display: flex;
  margin-bottom: 16px;
`

const VideoThumbnail = styled.div<{ imageSrc: string }>`
  background-image: url(${(props) => props.imageSrc});
  background-size: cover;
  width: 180px;
  height: 110px;
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
`
const Container = styled.section`
  max-width: 800px;
`

interface IProps {
  data: Array<{
    imageSrc: string
    time: string
    title: string
    studio: string
  }>
}
export default function index({ data }: IProps) {
  return (
    <Container>
      {data.map((d) => (
        <VideoItem>
          <VideoThumbnail imageSrc={d.imageSrc}>
            <VideoTime>{d.time}</VideoTime>
          </VideoThumbnail>
          <Content>
            <Title>{d.title}</Title>
            <Text>{d.studio}</Text>
            <Text>Recommended for you</Text>
            <Tag>New</Tag>
          </Content>
        </VideoItem>
      ))}
    </Container>
  )
}
