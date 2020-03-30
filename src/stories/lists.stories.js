import React from "react"
import "../App.css"
import faker from "faker"
import VideoList from "../components/lists/VideoList"
import FacebookFriends from "../components/lists/FacebookFriendList"

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
    src: faker.image.imageUrl(),
    name: faker.name.firstName() + " " + faker.name.lastName(),
    buttonText: "Add friend",
    buttonText2: "Remove",
    mutualText: "5 Mutual friends."
  },
  {
    src: faker.image.imageUrl(),
    name: faker.name.firstName() + " " + faker.name.lastName(),
    buttonText: "Add friend",
    buttonText2: "Remove",
    mutualText: "5 Mutual friends."
  },
  {
    src: faker.image.imageUrl(),
    name: faker.name.firstName() + " " + faker.name.lastName(),
    buttonText: "Add friend",
    buttonText2: "Remove",
    mutualText: "5 Mutual friends."
  },
  {
    src: faker.image.imageUrl(),
    name: faker.name.firstName() + " " + faker.name.lastName(),
    buttonText: "Add friend",
    buttonText2: "Remove",
    mutualText: "5 Mutual friends."
  },
  {
    src: faker.image.imageUrl(),
    name: faker.name.firstName() + " " + faker.name.lastName(),
    buttonText: "Add friend",
    buttonText2: "Remove",
    mutualText: "5 Mutual friends."
  }
]
export const FacebookFriendList = () => <FacebookFriends friends={friends} />
