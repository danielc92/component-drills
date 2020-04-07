import React from "react"
import styled from "styled-components"

const Banner = styled.div`
  background: ${(props) => props.background};
  color: white;
  text-align: center;
  padding: 80px 0;
`

const Header = styled.h1`
  font-size: 56px;
  margin-bottom: 24px;
`

const SubHeader = styled.p`
  font-size: 18px;
  margin-bottom: 24px;
`
export default function index({ header, subHeader, background }) {
  return (
    <Banner background={background}>
      <Header>{header}</Header>
      <SubHeader>{subHeader}</SubHeader>
    </Banner>
  )
}
