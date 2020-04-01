import image1 from "./images/harley-davidson-eeTJKC_wz34-unsplash.jpg"
import image2 from "./images/taylor-simpson-2SX1LEMppsA-unsplash.jpg"
import image3 from "./images/jason-leung-DC5zm4FeBoI-unsplash.jpg"
import React from "react"

import RealEstate from "../components/blog/RealEstateBlog"

export default {
  title: "Blogs"
}

export const RealEstateBlog = () => (
  <RealEstate
    title="Consequat consequat do eaure culpa adipisicing elit do ex et culpa exercitation."
    author="Daniel Corcoran"
    date="2020 April 23rd"
    content={[
      {
        node: "paragraph",
        value:
          "Eiusmod cupidatat officia magna dolor nulla adipisicing. Eiusmod magna aliquip elit aute. Tempor reprehenderit enim officia nulla ut veniam cillum eiusmod ipsum sunt sint laborum ullamco tempor. Labore do labore ullamco et esse aute velit velit. Proident ea commodo officia minim. Tempor consequat deserunt Lorem eiusmod Lorem exercitation magna nostrud dolore enim qui ad."
      },
      {
        node: "image",
        value: image1
      },
      {
        node: "quote",
        value:
          "Est amet tempor incididunt non ut enim deserunt mollit Lorem incididunt. Tempor et minim aliqua id non proident."
      },
      {
        node: "paragraph",
        value:
          "Eiusmod cupidatat officia magna dolor nulla adipisicing. Eiusmod magna aliquip elit aute. Tempor reprehenderit enim officia nulla ut veniam cillum eiusmod ipsum sunt sint laborum ullamco tempor. Labore do labore ullamco et esse aute velit velit. Proident ea commodo officia minim. Tempor consequat deserunt Lorem eiusmod Lorem exercitation magna nostrud dolore enim qui ad."
      },
      {
        node: "image",
        value: image2
      },
      {
        node: "paragraph",
        value:
          "Eiusmod cupidatat officia magna dolor nulla adipisicing. Eiusmod magna aliquip elit aute. Tempor reprehenderit enim officia nulla ut veniam cillum eiusmod ipsum sunt sint laborum ullamco tempor. Labore do labore ullamco et esse aute velit velit. Proident ea commodo officia minim. Tempor consequat deserunt Lorem eiusmod Lorem exercitation magna nostrud dolore enim qui ad."
      },
      {
        node: "image",
        value: image3
      }
    ]}
  />
)
