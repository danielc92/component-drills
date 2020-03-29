import React from "react"
import Basic from "../components/cards/Basic"
import Dev from "../components/cards/DevToCard"
import faker from "faker"

export default {
  title: "Cards"
}

let DevCardData = []

for (let i = 0; i < 7; i++) {
  const data = {
    imageSrc: faker.image.imageUrl(),
    title: faker.lorem.text().substring(0, 40),
    tags: faker.lorem.words().split(" "),
    datePosted: "10 March",
    readTime: `${faker.random.number(32)} Minutes`
  }
  DevCardData.push(data)
}

export const BasicCard = () => {
  return <Basic />
}

export const DevToCard = () => {
  return DevCardData.map(i => <Dev {...i} />)
}
