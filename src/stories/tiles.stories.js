import React from "react"
import Basic from "../components/tiles/BasicIconRow"
import svg1 from "./svg/alcohol-gel.svg"
import svg2 from "./svg/covid-19.svg"
import svg3 from "./svg/healthcare-and-medical.svg"
import svg4 from "./svg/medical-mask.svg"

export default {
  title: "Tiles"
}

const data = [
  {
    imageSrc: svg1,
    title: "Lab minim ex enim in.",
    text: "Sit aliquip do do non nulla deserunt amet mollit sint."
  },
  {
    imageSrc: svg2,
    title: "Laboris id etn.",
    text: "Sit aliquip do do non nulla deserunt amet mollit sint."
  },
  {
    imageSrc: svg3,
    title: "Laid et minim minim ex enim in.",
    text: "Sit aliquip do do non nulla deserunt amet mollit sint."
  },
  {
    imageSrc: svg4,
    title: "Laboris id et mienim in.",
    text: "Sit aliquip do do non nulla deserunt amet mollit sint."
  }
]

export const BasicIconRow = () => <Basic data={data} />
