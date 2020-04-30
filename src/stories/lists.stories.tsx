import React from "react"
import "../App.css"
import faker from "faker"
import Techcrunch from "../components/lists/TechcrunchList"
import VideoList from "../components/lists/VideoList"
import RedditTrending from "../components/lists/RedditTrendingList"
import FacebookFriends from "../components/lists/FacebookFriendList"
import face1 from "./images/humans/face-1.png"
import face2 from "./images/humans/face-2.png"
import face3 from "./images/humans/face-3.png"
import face4 from "./images/humans/face-4.png"
import face5 from "./images/humans/face-5.png"
import icon1 from "./images/icons/compass.png"
import icon2 from "./images/icons/diamond.png"
import icon3 from "./images/icons/database-2.png"
import icon4 from "./images/icons/compose.png"
import icon5 from "./images/icons/internet.png"
import animal1 from "./images/animals/boris-smokrovic-DPXytK8Z59Y-unsplash.jpg"
import animal2 from "./images/animals/david-clode-0lwa8Dprrzs-unsplash.jpg"
import animal3 from "./images/animals/gary-bendig-6GMq7AGxNbE-unsplash.jpg"
import animal4 from "./images/animals/pietro-jeng-0Sd2qqU5soQ-unsplash.jpg"

import { CenterHorizontalAndVertical } from "./layout"
export default {
  title: "Lists",
}

const data = [
  {
    title: "Aliqua sunt quis nulla",
    studio: "Channel 8",
    imageSrc: animal1,
    time: "12:32",
  },
  {
    title: "Deserunt ipsum ex magna dolor labore dolore ad do.",
    studio: "Channel 8",
    imageSrc: animal2,
    time: "12:32",
  },
  {
    title: "Fugiat occaecat ut eiusmodnim exercitation.",
    studio: "Channel 8",
    imageSrc: animal3,
    time: "12:32",
  },
  {
    title: "Esse enim enim quis prehenderit ",
    studio: "Channel 8",
    imageSrc: animal4,
    time: "12:32",
  },
]

export const YoutubeVideoList = () => {
  return (
    <CenterHorizontalAndVertical>
      <VideoList data={data} />
    </CenterHorizontalAndVertical>
  )
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

const articles = [
  {
    title:
      "Aute occaecat aliqua non ut occaecat laborum cupidatat exercitation.",
    date: "3:30 pm AEST • April 16, 2020",
    author: "Steve O Hear",
    summary:
      "Reprehenderit culpa. Exercitation dolore est ipsum laborum ullamco irure anim velit excepteur aute ut voluptate nisi ad...",
    image: animal2,
  },
  {
    title:
      "Aute occaecat aliqua non ut occaecat laborum cupidatat exercitation.",
    date: "3:30 pm AEST • April 16, 2020",
    author: "Steve O Hear",
    summary:
      "Reprehenderit culpa. Exercitation dolore est ipsum laborum ullamco irure anim velit excepteur aute ut voluptate nisi ad...",
    image: animal1,
  },
  {
    title:
      "Aute occaecat aliqua non ut occaecat laborum cupidatat exercitation.",
    date: "3:30 pm AEST • April 16, 2020",
    author: "Steve O Hear",
    summary:
      "Reprehenderit culpa. Exercitation dolore est ipsum laborum ullamco irure anim velit excepteur aute ut voluptate nisi ad...",
    image: animal3,
  },
]

export const TechCrunchList = () => (
  <CenterHorizontalAndVertical>
    <Techcrunch articles={articles} />
  </CenterHorizontalAndVertical>
)

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
