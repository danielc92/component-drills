import React from "react"
import styled from "styled-components"

const NavbarWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  flex-wrap: wrap;
`

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const NavbarRight = styled.div`
  display: flex;
`

const Logo = styled.h2`
  margin: 0;
  padding: 16px;
  font-size: 32px;
`
const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Link = styled.a`
  margin: 0;
  padding: 16px;
  cursor: pointer;
  display: block;
  color: black;
  text-decoration: none;
  :hover {
    color: #1264a3;
    text-decoration: underline;
  }
`
const Button = styled.a`
  display: block;
  padding: 16px;
  cursor: pointer;

  border-radius: 2px;
  font-weight: bold;
  text-transform: ${(props) => (props.primary ? "uppercase" : "")};
  color: ${(props) => (props.primary ? "white" : "black")};
  background: ${(props) => (props.primary ? "#4D1E4D" : "transparent")};
`

export default function index({ signInButton, links, getStartedButton }) {
  return (
    <NavbarWrapper>
      <NavbarLeft>
        <Logo>flack</Logo>
        <LinksContainer>
          {links.map((l) => (
            <Link href={l.url}>{l.text}</Link>
          ))}
        </LinksContainer>
      </NavbarLeft>
      <NavbarRight>
        <Button>{signInButton}</Button>
        <Button primary>{getStartedButton}</Button>
      </NavbarRight>
    </NavbarWrapper>
  )
}
