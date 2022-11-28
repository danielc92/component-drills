import React from "react"
import Image from "../components/tags/Image"
import Basic from "../components/tags/Basic"
import face1 from "./images/humans/face-1.png"
import face2 from "./images/humans/face-2.png"
import face3 from "./images/humans/face-3.png"
import face4 from "./images/humans/face-4.png"
import face5 from "./images/humans/face-5.png"

export default {
  title: "Tags",
}

const tags = [
  {
    text: "lorem",
    src: face1,
  },
  {
    text: "dalore",
    src: face2,
  },
  {
    text: "ipsum",
    src: face3,
  },
  {
    text: "relium",
    src: face4,
  },
  {
    text: "selipsum",
    src: face5,
  },
]

const tags2 = [
  {
    text: "lorem",
    color: "#fff",
    background: "#459352",
  },
  {
    text: "dalore",
    color: "#fff",
    background: "#3086cc",
  },
  {
    text: "ipsum",
    color: "#fff",
    background: "#a01313",
  },
  {
    text: "relium",
    color: "#fff",
    background: "#54534f",
  },
  {
    text: "selipsum",
    color: "#fff",
    background: "#a01313",
  },
]
export const Tags = () => <Basic tags={tags2} />
export const TagsWithCustomColour = () => <Basic tags={tags2} />
export const TagsRounded = () => <Basic rounded tags={tags2} />
export const ImageTags = () => <Image tags={tags} />
