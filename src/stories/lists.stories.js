import React from "react"
import "../App.css"
import faker from "faker"
import VideoList from "../components/lists/VideoList"
import FacebookFriends from "../components/lists/FacebookFriendList"
import face1 from "./images/face-1.png"
import face2 from "./images/face-2.png"
import face3 from "./images/face-3.png"
import face4 from "./images/face-4.png"
import face5 from "./images/face-5.png"
export default {
  title: "Lists"
}

const data = [
  {
    title: "Corona Virus Outbreak",
    studio: "Channel 8",
    imageSrc: "https://picsum.photos/id/237/600/450",
    time: "12:32"
  },
  {
    title: "Corona Virus Outbreak",
    studio: "Channel 8",
    imageSrc: "https://picsum.photos/id/233/600/450",
    time: "12:32"
  },
  {
    title: "Corona Virus Outbreak",
    studio: "Channel 8",
    imageSrc: "https://picsum.photos/id/232/600/450",
    time: "12:32"
  },
  {
    title: "Corona Virus Outbreak",
    studio: "Channel 8",
    imageSrc: "https://picsum.photos/id/231/600/450",
    time: "12:32"
  }
]

export const YoutubeVideoList = () => {
  return data.map(item => <VideoList {...item} />)
}

const friends = [
  {
    src: face1,
    name: faker.name.firstName() + " " + faker.name.lastName(),
    buttonText: "Add friend",
    buttonText2: "Remove",
    mutualText: "5 Mutual friends."
  },
  {
    src: face2,
    name: faker.name.firstName() + " " + faker.name.lastName(),
    buttonText: "Add friend",
    buttonText2: "Remove",
    mutualText: "5 Mutual friends."
  },
  {
    src: face3,
    name: faker.name.firstName() + " " + faker.name.lastName(),
    buttonText: "Add friend",
    buttonText2: "Remove",
    mutualText: "5 Mutual friends."
  },
  {
    src: face4,
    name: faker.name.firstName() + " " + faker.name.lastName(),
    buttonText: "Add friend",
    buttonText2: "Remove",
    mutualText: "5 Mutual friends."
  },
  {
    src: face5,
    name: faker.name.firstName() + " " + faker.name.lastName(),
    buttonText: "Add friend",
    buttonText2: "Remove",
    mutualText: "5 Mutual friends."
  }
]
export const FacebookFriendList = () => <FacebookFriends friends={friends} />
