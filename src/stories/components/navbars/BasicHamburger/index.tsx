import React, { useState } from 'react'
import styled from 'styled-components'

const NavigationWrapper = styled.nav<{ background: string }>`
  padding: 8px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  border-bottom: 1px solid #eaeaea;
`

const Hamburger = styled.div`
  position: relative;
  width: 18px;
  height: 18px;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`
const Icon = styled.img`
  width: 100%;
  height: 100%;
`
const Logo = styled.a`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
  padding: 8px;
  cursor: pointer;
`

const NavigationItems = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`

const NavigationItem = styled.a<{ backgroundHover: string }>`
  color: #000;
  text-decoration: none;
  display: block;
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
    background-color: ${(props) => props.backgroundHover};
  }
`

const HiddenLinkItems = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? '' : 'none')};
  position: absolute;
  top: 24px;
  right: 0;
  border-radius: 4px;
  background: #fff;
  padding: 8px 16px;
  border: 1px solid #cacaca;
`
interface IProps {
  iconSrc: string
  links: Array<{
    text: string
    url: string
  }>
  color: string
  background: string
  backgroundHover: string
}
export default function index ({
  iconSrc,
  links,
  color,
  background,
  backgroundHover
}: IProps) {
  const [menuState, setMenu] = useState(false)
  return (
    <NavigationWrapper color={color} background={background}>
      <Logo>Navbar</Logo>
      <Hamburger onClick={() => setMenu(!menuState)}>
        <Icon src={iconSrc}></Icon>
        <HiddenLinkItems show={menuState}>
          {links.map((l) => (
            <NavigationItem href={l.url} backgroundHover={backgroundHover}>
              {l.text}
            </NavigationItem>
          ))}
        </HiddenLinkItems>
      </Hamburger>
      <NavigationItems>
        {links.map((l) => (
          <NavigationItem href={l.url} backgroundHover={backgroundHover}>
            {l.text}
          </NavigationItem>
        ))}
      </NavigationItems>
    </NavigationWrapper>
  )
}
