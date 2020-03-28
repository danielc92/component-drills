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
  margin: 0;
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
      </CardContent>
    </Card>
  )
}

export default index
