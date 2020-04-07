import React from "react"
import faker from "faker"
import styled from "styled-components"

const Card = styled.div`
  padding: 16px;
  border: 1px solid darkgray;
  box-shadow: 3px 3px blue;
  margin: 16px auto 16px auto;
  max-width: 500px;
`

const Title = styled.h2`
  margin: 0;
`

const Timestamp = styled.p`
  font-size: 12px;
  color: grey;
  font-weight: bold;
  margin: 0 8px 0 0;
`

const Tag = styled.span`
  color: black;
  font-size: 12px;
  margin: 0 8px 8px 0;
`

const Content = styled.div`
  display: flex;
  justify-content: ${(props) => (props.between ? "space-between" : "")};
`

const Button = styled.a`
  background: blue;
  color: #fff;
  padding: 6px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
`

const Image = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  margin-right: 16px;
`

const RightBox = styled.div`
  display: flex;
  align-items: center;
`

export default function index({ imageSrc, title, tags, datePosted, readTime }) {
  return (
    <Card>
      <Content>
        <Image src={imageSrc} />
        <div>
          <Title>{title}</Title>
          {tags.map((x) => (
            <Tag>#{x}</Tag>
          ))}
          <Timestamp>{datePosted}</Timestamp>
        </div>
      </Content>
      <Content between>
        <div></div>
        <RightBox>
          <Timestamp>{readTime}</Timestamp>
          <Button>SAVE</Button>
        </RightBox>
      </Content>
    </Card>
  )
}
