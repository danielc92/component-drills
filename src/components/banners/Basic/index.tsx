import React from "react"
import styled from "styled-components"

const Banner = styled.div<{ background: string }>`
  background: ${(props) => props.background};
  color: white;
  text-align: center;
  padding: 80px 0;
`

const Header = styled.h1`
  font-size: 48px;
  margin: 0 0 16px 0;
`

const SubHeader = styled.p`
  font-size: 16px;
  margin: 0 0 16px 0;
`

const Button = styled.a<{ background: string }>`
  display: inline-block;
  background: ${(props) => props.background};
  border: 1px solid #fff;
  color: #fff;
  padding: 8px 16px;
  text-decoration: none;
  margin: 0;
`

interface IProps {
  header: string
  subHeader: string
  background: string
  ctaButtonHref: string
  ctaButtonText: string
}
export default function index({
  header,
  subHeader,
  background,
  ctaButtonHref,
  ctaButtonText,
}:IProps) {
  return (
    <Banner background={background}>
      <Header>{header}</Header>
      <SubHeader>{subHeader}</SubHeader>
      {ctaButtonText ? (
        <Button background={background} href={ctaButtonHref}>
          {ctaButtonText}
        </Button>
      ) : null}
    </Banner>
  )
}
