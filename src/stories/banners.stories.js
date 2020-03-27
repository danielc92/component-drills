import React from "react"
import Basic from "../components/banners/Basic"
import "../App.css"

export default {
  title: "Banners",
  component: Basic
}

export const BasicRedHeader = () => (
  <Basic
    header="Large Header"
    subHeader="Welcome to the page"
    background="red"
  />
)

export const BasicBlackHeader = () => (
  <Basic
    header="Large Header"
    subHeader="Welcome to the page"
    background="black"
  />
)

export const BasicBlueHeader = () => (
  <Basic
    header="Large Header"
    subHeader="Welcome to the page"
    background="blue"
  />
)

export const BasicOrangeHeader = () => (
  <Basic
    header="Large Header"
    subHeader="Welcome to the page"
    background="orange"
  />
)
