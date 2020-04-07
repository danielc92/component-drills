import React from "react"
import styled from "styled-components"

const gradients = {
  kingYna: `background: #1a2a6c;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #fdbb2d, #b21f1f, #1a2a6c);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #fdbb2d, #b21f1f, #1a2a6c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  `,
  quepal: `background: #11998e;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #38ef7d, #11998e);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #38ef7d, #11998e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  `,
  yoda: `
    background: #ff0099; 
    background: -webkit-linear-gradient(to right, #ff0099, #493240); 
    background: linear-gradient(to right, #ff0099, #493240); `,
  sublimeLight: `
    background: #FC5C7D;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #6A82FB, #FC5C7D);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #6A82FB, #FC5C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`,
  moonlitAsteroid: `
    background: #0F2027; 
    background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  
    background: linear-gradient(to right, #2C5364, #203A43, #0F2027); 
`,
}

const Banner = styled.div`
  ${(props) => props.gradient}
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
export default function index({ header, subHeader, background, type }) {
  return (
    <Banner background={background} gradient={gradients[type]}>
      <Header>{header}</Header>
      <SubHeader>{subHeader}</SubHeader>
    </Banner>
  )
}
