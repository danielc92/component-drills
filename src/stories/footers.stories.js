import React from "react"
import Whatsapp from "../components/footers/Whatsapp"
import Seek from "../components/footers/Seek"
import Webflow from "../components/footers/Webflow"

export default {
  title: "Footers",
}

const dummyColumns = [
  {
    title: "Lorem",
    links: [
      { text: "Dolore", url: "#" },
      { text: "Lorem anim ", url: "#", tag: "new" },

      { text: "laborum irure labore", url: "#" },
      { text: "Dolore", url: "#" },
    ],
  },
  {
    title: "Ipsum",
    links: [
      { text: "Dolore", url: "#" },
      { text: "Lorem anim ", url: "#", tag: "new" },
      { text: "consectetur", url: "#" },
      { text: "Quis dolor et in", url: "#" },
      { text: "laborum irure labore", url: "#" },
      { text: "Dolore", url: "#", tag: "new" },
    ],
  },
  {
    title: "Laborum",
    links: [
      { text: "Dolore", url: "#" },
      { text: "Lorem anim ", url: "#" },
      { text: "consectetur", url: "#" },
      { text: "Quis dolor et in", url: "#" },
      { text: "laborum irure labore", url: "#" },
      { text: "Dolore", url: "#" },
      { text: "Quis dolor et in", url: "#" },
      { text: "laborum irure labore", url: "#" },
      { text: "Dolore", url: "#" },
    ],
  },
  {
    title: "Dolrusim",
    links: [
      { text: "Dolore", url: "#" },
      { text: "Ipsum", url: "#" },
      { text: "Dolore", url: "#" },
    ],
  },
]

export const SeekerFooter = () => <Seek columns={dummyColumns}></Seek>
export const WhatsappFooter = () => <Whatsapp columns={dummyColumns}></Whatsapp>
export const WebflowFooter = () => <Webflow columns={dummyColumns} />
