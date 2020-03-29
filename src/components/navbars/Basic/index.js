import React from "react"
import styled from "styled-components"

const NavigationWrapper = styled.nav`
  padding: 8px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.background};
  color: ${props => props.color};
`
const Logo = styled.a`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
`

const NavigationItems = styled.div`
  display: flex;
`

const NavigationItem = styled.a`
  margin-right: 8px;
  padding: 8px;
  transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  font-size: 12px;
  border-radius: 4px;
  cursor: pointer;

  :last-child {
    margin-right: 0;
  }

  :hover {
    background-color: ${props => props.backgroundHover};
  }
`

export default function index({ color, background, backgroundHover }) {
  return (
    <NavigationWrapper color={color} background={background}>
      <Logo>Navbar</Logo>
      <NavigationItems>
        <NavigationItem backgroundHover={backgroundHover}>Home</NavigationItem>
        <NavigationItem backgroundHover={backgroundHover}>About</NavigationItem>
        <NavigationItem backgroundHover={backgroundHover}>
          Contact
        </NavigationItem>
        <NavigationItem backgroundHover={backgroundHover}>Media</NavigationItem>
      </NavigationItems>
    </NavigationWrapper>
  )
}
