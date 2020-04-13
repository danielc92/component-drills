import React from "react"
import Image from "../components/tags/Image"
import Basic from "../components/tags/Basic"
import face1 from "./images/face-1.png"
import face2 from "./images/face-2.png"
import face3 from "./images/face-3.png"
import face4 from "./images/face-4.png"
import face5 from "./images/face-5.png"

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
export const BasicTags = () => <Basic tags={tags} />
export const BasicTagsRounded = () => <Basic rounded tags={tags} />
export const ImageTags = () => <Image tags={tags} />
