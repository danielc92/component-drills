import React from "react"
import Basic from "../components/banners/Basic"
import ImageBanner from "../components/banners/ImageBanner"
import GradientBanner from "../components/banners/Gradient"
import Split from "../components/banners/BasicSplit"
import faker from "faker"

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
    imageSrc="https://i.picsum.photos/id/866/1920/1080.jpg"
  />
)

export const GradientBannerMoonlitAsteroid = () => (
  <GradientBanner header="Large Header" subHeader="Welcome to the page" />
)

export const BasicSplit = () => (
  <Split
    title="Split banner title"
    subTitle="Ea nisi consectetur id irure. Deserunt eu non adipisicing proident do. Ullamco ex exercitation elit pariatur ea et excepteur tempor sunt. Nostrud duis sunt voluptate dolor in enim. Mollit ad do elit dolore id labore consectetur culpa labore sit dolor."
    buttonText="Learn more"
    imageSrc={faker.image.imageUrl()}
  />
)
