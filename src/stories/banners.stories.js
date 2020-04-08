import React from "react"
import Basic from "../components/banners/Basic"
import Target from "../components/banners/TargetSplit"
import ImageBanner from "../components/banners/ImageBanner"
import GradientBanner from "../components/banners/Gradient"
import Split from "../components/banners/BasicSplit"
import Commbank from "../components/banners/Commbank"
import Outlook from "../components/banners/Outlook"
import Monday from "../components/banners/Monday"
import image1 from "./images/etienne-martin-2_K82gx9Uk8-unsplash.jpg"
import image2 from "./images/omar-lopez-rwF_pJRWhAI-unsplash.jpg"
import image3 from "./images/tobias-tullius-PXXtq6bp6cs-unsplash.jpg"
import image4 from "./images/korie-cull-IzIME1jwjCY-unsplash.jpg"
import "../App.css"

export default {
  title: "Banners",
  // component: Basic
}

export const BasicBannerWithRedBackground = () => (
  <Basic
    header="Large Header"
    subHeader="Welcome to the page"
    background="#d14b4b"
  />
)

export const BasicBannerWithBlueBackground = () => (
  <Basic
    header="Large Header"
    subHeader="Welcome to the page"
    background="#3c60ad"
  />
)

export const BasicBannerWithOrangeBackground = () => (
  <Basic
    header="Large Header"
    subHeader="Welcome to the page"
    background="#d88b17"
  />
)

export const BasicBannerWithBackgroundImage = () => (
  <ImageBanner
    header="Consequat dolor enim"
    subHeader="Aliquip ut minim aliqua magna aliqua ex voluptate."
    imageSrc={image3}
  />
)

export const CommbankBanner = () => (
  <Commbank
    image={image1}
    ctaHeader="Lorem incididunt adipisicing commodo aute reprehenderit nostunt."
    ctaSubHeader="Magna in elit sunt ad incididunt cillum nostrue qui consequat Lorem et anim."
    ctaButtonText="Learn more"
  />
)

export const GradientBannerSublimeLight = () => (
  <GradientBanner
    type="sublimeLight"
    header="Nostrud et magna"
    subHeader="Minim laborum laborum cillum nisi except"
  />
)

export const GradientBannerQuepal = () => (
  <GradientBanner
    type="quepal"
    header="Nostrud et magna"
    subHeader="Minim laborum laborum cillum nisi except"
  />
)

export const GradientBannerKingYna = () => (
  <GradientBanner
    type="kingYna"
    header="Nostrud et magna"
    subHeader="Minim laborum laborum cillum nisi except"
  />
)

export const MondayBanner = () => (
  <Monday
    title="Siagna sunt aliqua reprehquit ea excepteur quis non ut."
    subTitle="Proident ea ullamco enim Lorem aliqua ate."
    buttonText="Aliquip aliqua"
    buttonLink="#"
  />
)

export const BasicSplit = () => (
  <Split
    title="Nulla incididunt"
    subTitle="Excepteur tempor sunt. Nostrud duis sunt voluptate dolor in enim. Mollit ad do elit dolore id labore consectetur culpa labore sit dolor."
    buttonText="Lorem Ipsum"
    imageSrc={image1}
  />
)

export const TargetSplitBanner = () => (
  <Target
    title="Exercitation nulla duis"
    links={[
      { text: "Cupidatat duis.", url: "#" },
      { text: "Incididunt.", url: "#" },
      { text: "Eu anim Lorem dolor.", url: "#" },
      { text: "Tempor tempor ea culpa.", url: "#" },
      { text: "Nostrud in cupidatat.", url: "#" },
    ]}
    imageSrc={image4}
  />
)

export const OutlookBanner = () => (
  <Outlook
    ctaLevel1="Lorem Ipsum."
    ctaLevel2="Aliqua irure."
    ctaLevel3="Dolore sunt aliqu."
    backgroundImageSrc={image2}
  />
)
