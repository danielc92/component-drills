import React from "react"
import styled from "styled-components"

const Section = styled.section``

const Wrapper = styled.div`
  max-width: 1000px;
  display: grid;
  margin: 0 auto;
  gap: 48px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
`

const Card = styled.div`
  padding: 12px;
  box-shadow: 2px 2px 18px rgba(0, 0, 0, 0.15);
  transition: all 0.24s cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;
  :hover {
    transform: scale(1.03);
    box-shadow: 2px 2px 18px rgba(0, 0, 0, 0.35);
  }
`
const Header = styled.h1`
  font-size: 36px;
  text-align: center;
`

const CardHeader = styled.h2`
  margin: 0;
  height: 120px;
`

const CardType = styled.p`
  margin: 0 0 8px 0;
  font-size: 14px;
  color: grey;
`

const CardImage = styled.img`
  height: 200px;
  object-fit: cover;
  object-position: 50% 50%;
  width: 100%;
  margin-bottom: 8px;
`

const LinkBox = styled.div`
  display: flex;
  justify-content: space-between;
`

const Link = styled.a`
  color: #1264a3;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
`

export default function index({ ctaText, cards }) {
  return (
    <Section>
      <Header>{ctaText}</Header>
      <Wrapper>
        {cards.map((i) => (
          <Card>
            <CardImage src={i.image}></CardImage>
            <CardType>{i.type}</CardType>
            <CardHeader>{i.title}</CardHeader>
            <LinkBox>
              <Link href={i.linkUrl}>{i.linkText}</Link>
            </LinkBox>
          </Card>
        ))}
      </Wrapper>
    </Section>
  )
}
