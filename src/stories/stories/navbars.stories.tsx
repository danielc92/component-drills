import React from 'react'
import Basic from '../components/navbars/Basic'
import BasicHamburger from '../components/navbars/BasicHamburger'
import Centered from '../components/navbars/Centered'
import Slack from '../components/navbars/Slack'
import Drawer from '../components/navbars/BasicDrawer'
import menuIcon from './svg/menu.svg'
export default {
  title: 'Navbars'
}

export const BasicWithHamburger = () => (
  <BasicHamburger
    background="#fff"
    color="#000"
    backgroundHover="#f1f1f1"
    iconSrc={menuIcon}
    links={[
      { url: '#', text: 'Home' },
      { url: '#', text: 'Resources' },
      { url: '#', text: 'Contact' },
      { url: '#', text: 'About' },
      { url: '#', text: 'News' }
    ]}
  />
)

export const BasicDarkNavbar = () => (
  <Basic background="#000" color="#fff" backgroundHover="#bcbcbc" />
)

export const BasicLightNavbar = () => (
  <Basic background="#f3f3f3" color="#000" backgroundHover="#bcbcbc" />
)

export const BasicRedNavbar = () => (
  <Basic background="#e54e4e" color="#fff" backgroundHover="#ea2a2a" />
)

export const BasicCentered = () => <Centered />

export const BasicDrawer = () => (
  <Drawer
  background="#e54e4e" color="#fff"
    menuIcon={menuIcon}
    links={[
      { url: '#', text: 'Home' },
      { url: '#', text: 'Resources' },
      { url: '#', text: 'Contact' },
      { url: '#', text: 'About' },
      { url: '#', text: 'News' }
    ]}
  />
)
export const SlackNavbar = () => (
  <Slack
  logoText="Logo text"
    links={[
      { text: 'Why flack?', url: '#' },
      { text: 'Enterprise', url: '#' },
      { text: 'Solutions', url: '#' },
      { text: 'Pricing', url: '#' },
      { text: 'Resources', url: '#' }
    ]}
    getStartedButton="get started"
    signInButton="Sign In"
  />
)
