import React from "react"
import styled from "styled-components"

const gradients = {
  yoda: `
    background: #ff0099; 
    background: -webkit-linear-gradient(to right, #ff0099, #493240); 
    background: linear-gradient(to right, #ff0099, #493240); `,
  moonlitAsteroid: `
    background: #0F2027; 
    background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  
    background: linear-gradient(to right, #2C5364, #203A43, #0F2027); 
`
}

const Banner = styled.div`
  ${gradients.yoda}
  color: white;
  text-align: center;
  padding: 48px 0;
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
