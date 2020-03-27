import React from "react"
import Basic from "../components/banners/Basic"
import ImageBanner from "../components/banners/ImageBanner"
import "../App.css"

export default {
  title: "Banners"
  // component: Basic
}

export const BasicBannerWithRedBackground = () => (
  <Basic
    header="Large Header"
    subHeader="Welcome to the page"
    background="red"
  />
)

export const BasicBannerWithBlackBackground = () => (
  <Basic
    header="Large Header"
    subHeader="Welcome to the page"
    background="black"
  />
)

export const BasicBannerWithBlueBackground = () => (
  <Basic
    header="Large Header"
    subHeader="Welcome to the page"
    background="blue"
  />
)

export const BasicBannerWithOrangeBackground = () => (
  <Basic
    header="Large Header"
    subHeader="Welcome to the page"
    background="orange"
  />
)

export const ImageBannerWithDummyImage = () => (
  <ImageBanner
    header="Large Header"
    subHeader="Welcome to the page"
    imageSrc="https://i.picsum.photos/id/866/1280/720.jpg"
  />
)
