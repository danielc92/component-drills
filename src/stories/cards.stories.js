import React from "react"
import Basic from "../components/cards/Basic"
import Dev from "../components/cards/DevToCard"
import Slack from "../components/cards/SlackCards"
import faker from "faker"
import Bona from "../components/cards/Bona"
import image1 from "./images/harley-davidson-eeTJKC_wz34-unsplash.jpg"
import image2 from "./images/jason-leung-DC5zm4FeBoI-unsplash.jpg"
import image3 from "./images/taylor-simpson-2SX1LEMppsA-unsplash.jpg"
import face1 from "./images/face-5.png"
import svgComment from "./svg/comment.svg"
import svgEye from "./svg/eye.svg"
import svgHeart from "./svg/heart.svg"

export default {
  title: "Cards",
}

let DevCardData = []

for (let i = 0; i < 7; i++) {
  const data = {
    imageSrc: faker.image.imageUrl(),
    title: faker.lorem.text().substring(0, 40),
    tags: faker.lorem.words().split(" "),
    datePosted: "10 March",
    readTime: `${faker.random.number(32)} Minutes`,
  }
  DevCardData.push(data)
}

export const BasicCard = () => {
  return <Basic />
}

export const DevToCard = () => {
  return DevCardData.map((i) => <Dev {...i} />)
}

const cards = [
  {
    image: image1,
    type: "How-to",
    title: "Incididunt duis magna consequat irure occaecat.",
    linkUrl: "#",
    linkText: "learn more",
  },
  {
    image: image2,
    type: "How-to",
    title: "Labore aute Lorem elit esse.",
    linkUrl: "#",
    linkText: "learn more",
  },
  {
    image: image3,
    type: "How-to",
    title: "Laborum est aliqua aliqua pariatur.",
    linkUrl: "#",
    linkText: "learn more",
  },
]
export const SlackCards = () => (
  <Slack ctaText="What's new at Flack" cards={cards} />
)

export const BonaCard = () => (
  <Bona
    title="Labore officia dolore sit quis et magna consequat in commodo."
    authorImageSrc={face1}
    backgroundImageSrc={image3}
    viewImageSrc={svgEye}
    commentImageSrc={svgComment}
    heartImageSrc={svgHeart}
    statView={8}
    statComment={43}
    statLove={2}
  />
)
