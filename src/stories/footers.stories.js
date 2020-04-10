import React from "react"
import Whatsapp from "../components/footers/Whatsapp"

export default {
  title: "Footers",
}

const dummyColumns = [
  {
    title: "Lorem",
    links: [
      { text: "Dolore", url: "#" },
      { text: "Lorem anim ", url: "#" },

      { text: "laborum irure labore", url: "#" },
      { text: "Dolore", url: "#" },
    ],
  },
  {
    title: "Lorem",
    links: [
      { text: "Dolore", url: "#" },
      { text: "Lorem anim ", url: "#" },
      { text: "consectetur", url: "#" },
      { text: "Quis dolor et in", url: "#" },
      { text: "laborum irure labore", url: "#" },
      { text: "Dolore", url: "#" },
    ],
  },
  {
    title: "Lorem",
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
    title: "Lorem",
    links: [
      { text: "Dolore", url: "#" },
      { text: "Ipsum", url: "#" },
      { text: "Dolore", url: "#" },
    ],
  },
]
export const WhatsappFooter = () => <Whatsapp columns={dummyColumns}></Whatsapp>
