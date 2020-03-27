import React from "react"
import "../App.css"
import VideoList from "../components/lists/VideoList"

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
