import React from "react"
import Basic from "../components/cards/Basic"
import Dev from "../components/cards/DevToCard"
import DevBlog from "../components/cards/DevToBlogCard"
import Webflow from "../components/cards/WebflowBlog"
import Slack from "../components/cards/SlackCards"
import Pricing from "../components/cards/Pricing"
import Highlighted from "../components/cards/Highlighted"
import BlogCard from "../components/cards/BlogCard"
import faker from "faker"
import Bona from "../components/cards/Bona"
import image1 from "./images/harley-davidson-eeTJKC_wz34-unsplash.jpg"
import image2 from "./images/jason-leung-DC5zm4FeBoI-unsplash.jpg"
import image3 from "./images/taylor-simpson-2SX1LEMppsA-unsplash.jpg"
import image4 from "./images/andrea-cau-nV7GJmSq3zc-unsplash.jpg"
import face1 from "./images/humans/face-5.png"
import svgComment from "./svg/comment.svg"
import svgEye from "./svg/eye.svg"
import svgHeart from "./svg/heart.svg"
import { CenterHorizontalAndVertical } from "./layout"

export default {
  title: "Cards",
}

let DevCardData: {
  imageSrc: string
  title: string
  tags: string[]
  datePosted: string
  readTime: string
}[] = []

for (let i = 0; i < 7; i++) {
  const data = {
    tagline: faker.lorem.words(4),
    authorName: faker.name.firstName() + " " + faker.name.lastName(),
    authorSrc: face1,
    imageSrc: faker.image.imageUrl(),
    title: faker.lorem.words(4),
    text: faker.lorem.words(45),
    tags: faker.lorem.words().split(" "),
    datePosted: "10 March",
    readTime: `${faker.random.number(32)} Minutes`,
  }
  DevCardData.push(data)
}

export const BasicCard = () => {
  return (
    <Basic
      cards={[
        {
          cardDescription: faker.lorem.words(20),
          cardTitle: faker.lorem.words(4),
          cardImageSource: faker.image.imageUrl(),
          cardTags: faker.lorem.words(6).split(" "),
          cardImageAlt: faker.lorem.words(4),
        },
        {
          cardDescription: faker.lorem.words(20),
          cardTitle: faker.lorem.words(4),
          cardImageSource: faker.image.imageUrl(),
          cardTags: faker.lorem.words(6).split(" "),
          cardImageAlt: faker.lorem.words(4),
        },
        {
          cardDescription: faker.lorem.words(20),
          cardTitle: faker.lorem.words(4),
          cardImageSource: faker.image.imageUrl(),
          cardTags: faker.lorem.words(6).split(" "),
          cardImageAlt: faker.lorem.words(4),
        },
        {
          cardDescription: faker.lorem.words(20),
          cardTitle: faker.lorem.words(4),
          cardImageSource: faker.image.imageUrl(),
          cardTags: faker.lorem.words(6).split(" "),
          cardImageAlt: faker.lorem.words(4),
        },
        {
          cardDescription: faker.lorem.words(20),
          cardTitle: faker.lorem.words(4),
          cardImageSource: faker.image.imageUrl(),
          cardTags: faker.lorem.words(6).split(" "),
          cardImageAlt: faker.lorem.words(4),
        },
      ]}
    />
  )
}

export const PricingCards = () => {
  return (
    <CenterHorizontalAndVertical>
      <Pricing
        cards={[
          {
            background: "#36a571",
            color: "white",
            title: "standard",
            price: "$49.99",
            priceInterval: "per month",
            features: [
              "lorem ipsum",
              "delore perscu",
              "lorem bipud",
              "delore perscu",
              "lorem bipud",
            ],
            cta: {
              link: "#",
              text: "Add to cart",
            },
          },
          {
            background: "#36a571",
            color: "white",
            title: "standard",
            price: "$49.99",
            priceInterval: "per month",
            features: [
              "lorem ipsum",
              "delore perscu",
              "lorem bipud",
              "delore perscu",
              "lorem bipud",
            ],
            cta: {
              link: "#",
              text: "Add to cart",
            },
          },
          {
            background: "#36a571",
            color: "white",
            title: "standard",
            price: "$49.99",
            priceInterval: "per month",
            features: [
              "lorem ipsum",
              "delore perscu",
              "lorem bipud",
              "delore perscu",
              "lorem bipud",
            ],
            cta: {
              link: "#",
              text: "Add to cart",
            },
          },
        ]}
      />
    </CenterHorizontalAndVertical>
  )
}

export const DevToListCard = () => {
  return DevCardData.map((i) => <Dev {...i} />)
}

export const DevToBlogCard = () => {
  return DevCardData.map((i) => <DevBlog {...i} />)
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

export const BlogCards = () => (
  <CenterHorizontalAndVertical>
    <BlogCard
      summary="Lorem ipsum delore Lorem ipsum delore Lorem ipsum delore Lorem ipsum delore "
      title="Lorem Ipsum Delore"
      linkText="Read more"
      linkUrl="#"
      imageSrc={image4}
      timestamp="2015-03-10"
      commentCount="20"
      timestampSrc={svgComment}
      statSrc={svgComment}
    />
  </CenterHorizontalAndVertical>
)
export const BonaCard = () => (
  <CenterHorizontalAndVertical>
    <Bona
      title="Labore officia dolore sit quis et magna consequat in commodo."
      authorImageSrc={face1}
      backgroundImageSrc={image3}
      viewImageSrc={svgEye}
      commentImageSrc={svgComment}
      heartImageSrc={svgHeart}
      statView="8"
      statComment="73"
      statLove="25"
    />
  </CenterHorizontalAndVertical>
)

const webflowCards = [
  {
    image: image1,
    title: "Ullamco commodo ut consequat cillum incididunt occaecat.",
    text:
      "Irure eu amet laborum laborum occaecat esse. Id exercitation excepteur Lorem deserunt qui dolor tempor deserunt occaecat velit labore commodo. Elit ea et cupidatat anim. Ullamco esse velit aliquip aute nulla anim pariatur esse. Culpa proident incididunt qui in id.",
    timestamp: "March 20, 2020",
    overlayColour: "blue",
  },
  {
    image: image2,
    title: "Ullamco commodo ut consequat cillum incididunt occaecat.",
    text:
      "Irure eu amet laborum laborum occaecat esse. Id exercitation excepteur Lorem deserunt qui dolor tempor deserunt occaecat velit labore commodo. Elit ea et cupidatat anim. Ullamco esse velit aliquip aute nulla anim pariatur esse. Culpa proident incididunt qui in id.",
    timestamp: "March 20, 2020",
    overlayColour: "purple",
  },
  {
    image: image2,
    title: "Ullamco commodo ut consequat cillum incididunt occaecat.",
    text:
      "Irure eu amet laborum laborum occaecat esse. Id exercitation excepteur Lorem deserunt qui dolor tempor deserunt occaecat velit labore commodo. Elit ea et cupidatat anim. Ullamco esse velit aliquip aute nulla anim pariatur esse. Culpa proident incididunt qui in id.",
    timestamp: "March 20, 2020",
    overlayColour: "red",
  },
  {
    image: image3,
    title: "Ullamco commodo ut consequat cillum incididunt occaecat.",
    text:
      "Irure eu amet laborum laborum occaecat esse. Id exercitation excepteur Lorem deserunt qui dolor tempor deserunt occaecat velit labore commodo. Elit ea et cupidatat anim. Ullamco esse velit aliquip aute nulla anim pariatur esse. Culpa proident incididunt qui in id.",
    timestamp: "March 20, 2020",
    overlayColour: "yellow",
  },
]

export const WebflowBlogCards = () => <Webflow cards={webflowCards} />

const highlightedCards = [
  {
    color: "#2436bf",
    title: "Post One",
    image: image4,
    text:
      "Dolore labore esse sit nulla qui eu nostrud quis esse excepteur labore. Cillum ut magna aliqua ipsum mollit quis incididunt sint est. Nisi amet officia esse culpa tempor ut consequat in. Exercitation sunt cillum sunt culpa laboris cupidatat nulla eiusmod sit elit. Non non .",
    timestamp: "5 days ago",
    footerItems: [
      {
        text: "5 mill",
        subText: "read",
      },
      {
        text: "6354",
        subText: "views",
      },
      {
        text: "54",
        subText: "comments",
      },
    ],
  },
  {
    color: "#E10661",
    title: "Post One",
    image: image1,
    text:
      "Dolore labore esse sit nulla qui eu nostrud quis esse excepteur labore. Cillum ut magna aliqua ipsum mollit quis incididunt sint est. Nisi amet officia esse culpa tempor ut consequat in. Exercitation sunt cillum sunt culpa laboris cupidatat nulla eiusmod sit elit. Non non .",
    timestamp: "5 days ago",
    footerItems: [
      {
        text: "5 mill",
        subText: "read",
      },
      {
        text: "6354",
        subText: "views",
      },
      {
        text: "54",
        subText: "comments",
      },
    ],
  },
  {
    color: "#1cce31",
    title: "Post One",
    image: image2,
    text:
      "Dolore labore esse sit nulla qui eu nostrud quis esse excepteur labore. Cillum ut magna aliqua ipsum mollit quis incididunt sint est. Nisi amet officia esse culpa tempor ut consequat in. Exercitation sunt cillum sunt culpa laboris cupidatat nulla eiusmod sit elit. Non non .",
    timestamp: "5 days ago",
    footerItems: [
      {
        text: "5 mill",
        subText: "read",
      },
      {
        text: "6354",
        subText: "views",
      },
      {
        text: "54",
        subText: "comments",
      },
    ],
  },
]

export const HighlightedCards = () => (
  <CenterHorizontalAndVertical>
    <Highlighted cards={highlightedCards} />
  </CenterHorizontalAndVertical>
)
