import React from "react"
import "../App.css"
import faker from "faker"
import Techcrunch from "../components/lists/TechcrunchList"
import VideoList from "../components/lists/VideoList"
import RedditTrending from "../components/lists/RedditTrendingList"
import FacebookFriends from "../components/lists/FacebookFriendList"
import face1 from "./images/face-1.png"
import face2 from "./images/face-2.png"
import face3 from "./images/face-3.png"
import face4 from "./images/face-4.png"
import face5 from "./images/face-5.png"
import icon1 from "./images/compass.png"
import icon2 from "./images/diamond.png"
import icon3 from "./images/database-2.png"
import icon4 from "./images/compose.png"
import icon5 from "./images/internet.png"
import image1 from "./images/etienne-martin-2_K82gx9Uk8-unsplash.jpg"

import { CenterHorizontalAndVertical } from "./layout"
export default {
  title: "Lists",
}

const data = [
  {
    title: "Corona Virus Outbreak",
    studio: "Channel 8",
    imageSrc: "https://picsum.photos/id/237/600/450",
    time: "12:32",
  },
  {
    title: "Corona Virus Outbreak",
    studio: "Channel 8",
    imageSrc: "https://picsum.photos/id/233/600/450",
    time: "12:32",
  },
  {
    title: "Corona Virus Outbreak",
    studio: "Channel 8",
    imageSrc: "https://picsum.photos/id/232/600/450",
    time: "12:32",
  },
  {
    title: "Corona Virus Outbreak",
    studio: "Channel 8",
    imageSrc: "https://picsum.photos/id/231/600/450",
    time: "12:32",
  },
]

export const YoutubeVideoList = () => {
  return data.map((item) => <VideoList {...item} />)
}

const friends = [
  {
    src: face1,
    name: faker.name.firstName() + " " + faker.name.lastName(),
    buttonText: "Add friend",
    buttonText2: "Remove",
    mutualText: "5 Mutual friends.",
  },
  {
    src: face2,
    name: faker.name.firstName() + " " + faker.name.lastName(),
    buttonText: "Add friend",
    buttonText2: "Remove",
    mutualText: "5 Mutual friends.",
  },
  {
    src: face3,
    name: faker.name.firstName() + " " + faker.name.lastName(),
    buttonText: "Add friend",
    buttonText2: "Remove",
    mutualText: "5 Mutual friends.",
  },
  {
    src: face4,
    name: faker.name.firstName() + " " + faker.name.lastName(),
    buttonText: "Add friend",
    buttonText2: "Remove",
    mutualText: "5 Mutual friends.",
  },
  {
    src: face5,
    name: faker.name.firstName() + " " + faker.name.lastName(),
    buttonText: "Add friend",
    buttonText2: "Remove",
    mutualText: "5 Mutual friends.",
  },
]

export const FacebookFriendList = () => <FacebookFriends friends={friends} />

const articles = new Array(6).fill({
  title: "Aute occaecat aliqua non ut occaecat laborum cupidatat exercitation.",
  date: "3:30 pm AEST • April 16, 2020",
  author: "Steve O Hear",
  summary:
    "Reprehenderit culpa. Exercitation dolore est ipsum laborum ullamco irure anim velit excepteur aute ut voluptate nisi ad...",
  image: image1,
})

export const TechCrunchList = () => <Techcrunch articles={articles} />

export const RedditTrendingCommunities = () => (
  <CenterHorizontalAndVertical>
    {" "}
    <RedditTrending
      items={[
        {
          imageSrc: icon1,
          members: "7.2k",
          name: "r/Consequat adipisic",
        },
        {
          imageSrc: icon2,
          members: "7.2k",
          name: "r/Exercitation",
        },
        {
          imageSrc: icon3,
          members: "1.2m",
          name: "r/Exercitation",
        },
        {
          imageSrc: icon4,
          members: "700",
          name: "r/Exercitation",
        },
        {
          imageSrc: icon5,
          members: "8.2k",
          name: "r/Exercitation",
        },
      ]}
      title="Trending Communities"
    />
  </CenterHorizontalAndVertical>
)
