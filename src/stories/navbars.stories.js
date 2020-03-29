import React from "react"
import Basic from "../components/navbars/Basic"
import Centered from "../components/navbars/Centered"
export default {
  title: "Navbars"
}

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
