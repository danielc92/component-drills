import React from "react"
import styled from "styled-components"

const NavigationWrapper = styled.nav`
  padding: 8px 24px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #f8f8f8;
`
const Logo = styled.a`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 18px;
  cursor: pointer;
`

const NavigationItems = styled.div`
  display: flex;
  align-items: center;
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
    background-color: #f2f2f2;
  }
`

export default function index() {
  return (
    <NavigationWrapper>
      <NavigationItems>
        <NavigationItem>Home</NavigationItem>
        <NavigationItem>About</NavigationItem>
        <NavigationItem>
          <Logo>Navbar</Logo>
        </NavigationItem>

        <NavigationItem>Contact</NavigationItem>
        <NavigationItem>Media</NavigationItem>
      </NavigationItems>
    </NavigationWrapper>
  )
}
