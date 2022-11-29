import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
`
const Card = styled.div`
  border-radius: 8px;
  border: 1px solid #dcdcdc;
`

const CardImage = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

const CardContent = styled.div`
  padding: 32px 16px;
  text-align: center;
`

const Timestamp = styled.p`
  font-size: 12px;
  font-weight: bold;
  margin: 0 0 8px 0;
  color: ${(props) => props.color};
`
const Title = styled.h4`
  margin: 0 0 8px 0;
`
const Paragraph = styled.p`
  font-size: 12px;
  line-height: 1.5;
  color: grey;
  margin: 0;
`
const FooterItem = styled.div<{ background?: string }>`
  display: flex;
  color: #fff;
  background: ${(props) => props.background};
  flex-direction: column;
  text-align: center;
  padding: 16px;
`

const Footer = styled.div<{ background: string }>`
  display: flex;
  justify-content: space-evenly;
  background-color: ${(props) => props.background};
  color: #fff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`

const FooterItemText = styled.p`
  margin: 0 0 2px 0;
  font-size: 18px;
  font-weight: bold;
  white-space: nowrap;
`

const FooterItemSubtext = styled.p`
  margin: 0;
  text-transform: uppercase;
  font-size: 10px;
`
interface IProps {
  cards: Array<{
    image: string
    color: string
    title: string
    text: string
    timestamp: string
    footerItems: Array<{
      text: string
      subText: string
    }>
  }>
}
export default function index ({ cards }: IProps) {
  return (
    <Grid>
      {cards.map((c) => (
        <Card>
          <CardImage src={c.image}></CardImage>
          <CardContent>
            <Timestamp color={c.color}>{c.timestamp}</Timestamp>
            <Title>{c.title}</Title>
            <Paragraph>{c.text.substring(0, 160) + '..'}</Paragraph>
          </CardContent>
          <Footer background={c.color}>
            {c.footerItems.map((f) => (
              <FooterItem>
                <FooterItemText>{f.text}</FooterItemText>
                <FooterItemSubtext>{f.subText}</FooterItemSubtext>
              </FooterItem>
            ))}
          </Footer>
        </Card>
      ))}
    </Grid>
  )
}
