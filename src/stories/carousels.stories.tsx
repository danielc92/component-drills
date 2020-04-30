import React from "react"
import Medium from "../components/carousels/Medium"
import faker from "faker"

export default {
  title: "Carousels"
}

const items = new Array(5).fill(1).map(i => ({
  text:
    "Ipsum sint ut excepteur fugiat esse. Ut duis ut sint enim sunt quis qui aute msint enim sunt quis qui aute magna labore sint velit id. Qui aliquip exercitation sunt do nostrud.",
  authorName: faker.name.firstName() + " " + faker.name.lastName(),
  authorUrl: faker.image.imageUrl()
}))

export const MediumCarousel = () => <Medium items={items} />
