import React from "react"
import styled from "styled-components"

const Card = styled.div`
  border-radius: 4px;
  max-width: 300px;
  border: 1px solid #f2f2f2;
`

const CardContent = styled.div`
  padding: 12px;
`

const CardImage = styled.img`
  width: 100%;
  height: auto;
`

const Header = styled.h3`
  margin: 0 0 12px 0;
`

const Paragraph = styled.p`
  margin: 0 0 12px 0;
`

const TagGroup = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`

const Tag = styled.div`
  display: inline-block;
  background: ${props => (props.background ? props.background : "darkgray")};
  color: #fff;
  font-size: 10px;
  padding: 4px;
  margin: 0 4px 4px 0;

  border-radius: 2px;
`
function index() {
  return (
    <Card>
      <CardImage src="https://i.picsum.photos/id/868/1280/720.jpg" />
      <CardContent>
        <Header>Hello</Header>
        <Paragraph>
          Qui qui minim deserunt proident in fugiat ex voluptate exercitation.
          Aute reprehenderit ullamco ea est aliquip consectetur Lorem cupidatat
          cupidatapor aliqua eiusmod duis qui sunt officia occaecat dolore
          consequat amet. Minim esse id aliqua minim sit cupidatat fugiat
          consequat incididunt nulla.
        </Paragraph>
        <TagGroup>
          <Tag background="red"># scene</Tag>
          <Tag background="blue"># photo</Tag>
          <Tag background="purple"># imagery</Tag>
          <Tag background="blue"># something</Tag>
        </TagGroup>
      </CardContent>
    </Card>
  )
}

export default index
