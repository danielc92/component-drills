import React from "react"
import styled from "styled-components"
import faker from "faker"

const CardGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
  padding: 24px;
`

const Card = styled.div`
  border-radius: 4px;
  border: 1px solid #f2f2f2;
`

const CardContent = styled.div`
  padding: 16px;
`

const CardImage = styled.img`
  width: 100%;
  height: auto;
`

const Header = styled.h4`
  margin: 0 0 12px 0;
`

const Paragraph = styled.p`
  margin: 0 0 12px 0;
  font-size: 12px;
  line-height: 1.68;
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
    <CardGrid>
      {new Array(8).fill(1).map((i, x) => (
        <Card>
          <CardImage src={`https://i.picsum.photos/id/${x}/1280/720.jpg`} />
          <CardContent>
            <Header>{faker.name.firstName()}</Header>
            <Paragraph>
              Qui qui minim deserunt proident in fugiat ex voluptate
              exercitation. Aute reprehenderitation. Aute reprehenderit ullamco
              ea est aliquip didunt nulla.
            </Paragraph>
            <TagGroup>
              {faker.random
                .words(3)
                .split(" ")
                .map(word => (
                  <Tag background="crimson"># {word}</Tag>
                ))}
            </TagGroup>
          </CardContent>
        </Card>
      ))}
    </CardGrid>
  )
}

export default index
