import React, { useState } from "react"
import styled from "styled-components"

const NavigationWrapper = styled.nav`
  padding: 8px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
`
const Logo = styled.a`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
`

const NavigationItems = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`

const NavigationItem = styled.a`
  margin-right: 8px;
  display: block;
  text-decoration: none;
  color: black;
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

const Drawer = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  border-left: 1px solid #dcdcdc;
  width: 180px;
  top: 0;
  padding: 24px;
  background: #fff;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: ${(props) =>
    props.open ? "translateX(0px)" : "translateX(100%)"};
`

const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  display: ${(props) => (props.open ? "block" : "none")};
`

const Menu = styled.img`
  width: 22px;
  height: 22px;
  padding: 8px;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`
export default function index({
  menuIcon,
  links,
  color,
  background,
  backgroundHover,
}) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [drawerOpen, setDrawer] = useState(false)

  const toggleDrawer = () => setDrawer(!drawerOpen)

  return (
    <NavigationWrapper color={color} background={background}>
      <Logo>Navbar</Logo>
      <NavigationItems>
        {links.map((l) => (
          <NavigationItem href={l.url}>{l.text}</NavigationItem>
        ))}
      </NavigationItems>
      <Menu src={menuIcon} onClick={toggleDrawer} />

      <Overlay open={drawerOpen}></Overlay>
      <Drawer open={drawerOpen}>
        {links.map((l) => (
          <NavigationItem href={l.url}>{l.text}</NavigationItem>
        ))}
        <NavigationItem onClick={toggleDrawer}>
          <strong>Close Menu</strong>
        </NavigationItem>
      </Drawer>
    </NavigationWrapper>
  )
}
