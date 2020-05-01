import React from "react"
import styled from "styled-components"

const Card = styled.div`
  border-radius: 4px;
`

const Header = styled.div<{ background: string; color: string }>`
  background: ${(p) => p.background};
  color: ${(p) => p.color};
  text-align: center;
  padding: 16px;
`
const HeaderText = styled.h4`
  text-transform: uppercase;
  margin: 0;
`

const PricingBox = styled.div`
  padding: 24px;
  text-align: center;
  background-color: #303030;
  color: #fff;
`

const Price = styled.h1`
  font-size: 38px;
  margin: 0 0 8px 0;
`
const PriceInterval = styled.p`
  font-size: 12px;
  color: #d3d3d3;
  margin: 0;
`

const FeaturesBox = styled.div`
  background-color: #333333;
  color: #fff;
`
const Feature = styled.div<{ lastChild?: boolean }>`
  padding: 8px;
  text-align: center;
  font-size: 12px;
  border-top: 1px solid grey;
  border-bottom: ${(p) => (p.lastChild ? "1px solid grey" : "")};
`
const CtaBox = styled.div`
  background-color: #303030;
  text-align: center;
  padding: 24px;
`

const Cta = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #fff;
`

const CardGrid = styled.section`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 1fr 1fr;
`

interface ICard {
  background: string
  color: string
  title: string
  price: string
  priceInterval: string
  features: Array<string>
  cta: {
    link: string
    text: string
  }
}

interface IProps {
  cards: Array<ICard>
}

const index = ({ cards }: IProps) => {
  return (
    <CardGrid>
      {cards.map((c) => (
        <Card>
          <Header background={c.background} color={c.color}>
            <HeaderText>{c.title}</HeaderText>
          </Header>
          <PricingBox>
            <Price> {c.price}</Price>
            <PriceInterval>{c.priceInterval}</PriceInterval>
          </PricingBox>
          <FeaturesBox>
            {c.features.map((f, index: number) => (
              <Feature lastChild={index === c.features.length - 1}>{f}</Feature>
            ))}
          </FeaturesBox>
          <CtaBox>
            <Cta href={c.cta.link}>{c.cta.text}</Cta>
          </CtaBox>
        </Card>
      ))}
    </CardGrid>
  )
}

export default index
