import image1 from "./images/harley-davidson-eeTJKC_wz34-unsplash.jpg"
import image2 from "./images/taylor-simpson-2SX1LEMppsA-unsplash.jpg"
import image3 from "./images/jason-leung-DC5zm4FeBoI-unsplash.jpg"
import React from "react"
import Timeout from "../components/blog/TimeoutBlog"
import RealEstate from "../components/blog/RealEstateBlog"

export default {
  title: "Blogs",
}

export const TimeoutBlog = () => (
  <Timeout
    imageSrc={image1}
    imageText="Nostrud tempor ex officia aliquip"
    title="Consequat adipisicing elit do ex et culpa exercitation."
    author="Daniel Corcoran"
    date="2020 April 23rd"
    content={[
      {
        node: "header",
        value:
          "Anim eiusmod aliquip quis veniam velit ipsum dolor commodo fugiat.",
      },
      {
        node: "paragraph",
        value:
          "Eiusmod cupidatat officia magna dolor nulla adipisicing. Eiusmod magna aliquip elit aute. Tempor reprehenderit enim officia nulla ut veniam cillum eiusmod ipsum sunt sint laborum ullamco tempor. Labore do labore ullamco et esse aute velit velit. Proident ea commodo officia minim. Tempor consequat deserunt Lorem eiusmod Lorem exercitation magna nostrud dolore enim qui ad.",
      },
      {
        node: "image",
        value: image1,
      },
      {
        node: "header",
        value:
          "Anim eiusmod aliquip quis veniam velit ipsum dolor commodo fugiat.",
      },
      {
        node: "paragraph",
        value:
          "Eiusmod cupidatat officia magna dolor nulla adipisicing. Eiusmod magna aliquip elit aute. Tempor reprehenderit enim officia nulla ut veniam cillum eiusmod ipsum sunt sint laborum ullamco tempor. Labore do labore ullamco et esse aute velit velit. Proident ea commodo officia minim. Tempor consequat deserunt Lorem eiusmod Lorem exercitation magna nostrud dolore enim qui ad.",
      },
      {
        node: "header",
        value:
          "Anim eiusmod aliquip quis veniam velit ipsum dolor commodo fugiat.",
      },
      {
        node: "paragraph",
        value:
          "Eiusmod cupidatat officia magna dolor nulla adipisicing. Eiusmod magna aliquip elit aute. Tempor reprehenderit enim officia nulla ut veniam cillum eiusmod ipsum sunt sint laborum ullamco tempor. Labore do labore ullamco et esse aute velit velit. Proident ea commodo officia minim. Tempor consequat deserunt Lorem eiusmod Lorem exercitation magna nostrud dolore enim qui ad.",
      },
      {
        node: "header",
        value:
          "Anim eiusmod aliquip quis veniam velit ipsum dolor commodo fugiat.",
      },
      {
        node: "paragraph",
        value:
          "Aliquip culpa velit laborum exercitation sit et Lorem qui officia consequat in cupidatat irure ut. Minim id id aliquip ullamco pariatur laboris enim ut ipsum in. Ad voluptate aute incididunt sunt eu in. Incididunt eiusmod ut eu ad velit veniam reprehenderit sunt.",
      },
      {
        node: "paragraph",
        value:
          "Aliqua do non proident ut quis nisi dolore quis excepteur cillum ea consectetur incididunt. Mollit culpa est incididunt sunt sint cupidatat labore nostrud cillum veniam et ex magna sit. Voluptate enim anim eu ullamco fugiat laboris magna dolore eu exercitation sint voluptate adipisicing. Enim quis ut pariatur cupidatat non mollit magna nisi nisi occaecat velit culpa. Cillum mollit culpa deserunt cupidatat culpa.",
      },
    ]}
  />
)
export const RealEstateBlog = () => (
  <RealEstate
    title="Consequat adipisicing elit do ex et culpa exercitation."
    author="Daniel Corcoran"
    date="2020 April 23rd"
    content={[
      {
        node: "paragraph",
        value:
          "Eiusmod cupidatat officia magna dolor nulla adipisicing. Eiusmod magna aliquip elit aute. Tempor reprehenderit enim officia nulla ut veniam cillum eiusmod ipsum sunt sint laborum ullamco tempor. Labore do labore ullamco et esse aute velit velit. Proident ea commodo officia minim. Tempor consequat deserunt Lorem eiusmod Lorem exercitation magna nostrud dolore enim qui ad.",
      },
      {
        node: "image",
        value: image1,
      },
      {
        node: "quote",
        value:
          "Est amet tempor incididunt non ut enim deserunt mollit Lorem incididunt. Tempor et minim aliqua id non proident.",
      },
      {
        node: "paragraph",
        value:
          "Eiusmod cupidatat officia magna dolor nulla adipisicing. Eiusmod magna aliquip elit aute. Tempor reprehenderit enim officia nulla ut veniam cillum eiusmod ipsum sunt sint laborum ullamco tempor. Labore do labore ullamco et esse aute velit velit. Proident ea commodo officia minim. Tempor consequat deserunt Lorem eiusmod Lorem exercitation magna nostrud dolore enim qui ad.",
      },
      {
        node: "image",
        value: image2,
      },
      {
        node: "paragraph",
        value:
          "Eiusmod cupidatat officia magna dolor nulla adipisicing. Eiusmod magna aliquip elit aute. Tempor reprehenderit enim officia nulla ut veniam cillum eiusmod ipsum sunt sint laborum ullamco tempor. Labore do labore ullamco et esse aute velit velit. Proident ea commodo officia minim. Tempor consequat deserunt Lorem eiusmod Lorem exercitation magna nostrud dolore enim qui ad.",
      },
      {
        node: "image",
        value: image3,
      },
      {
        node: "paragraph",
        value:
          "Aliquip culpa velit laborum exercitation sit et Lorem qui officia consequat in cupidatat irure ut. Minim id id aliquip ullamco pariatur laboris enim ut ipsum in. Ad voluptate aute incididunt sunt eu in. Incididunt eiusmod ut eu ad velit veniam reprehenderit sunt.",
      },
      {
        node: "paragraph",
        value:
          "Aliqua do non proident ut quis nisi dolore quis excepteur cillum ea consectetur incididunt. Mollit culpa est incididunt sunt sint cupidatat labore nostrud cillum veniam et ex magna sit. Voluptate enim anim eu ullamco fugiat laboris magna dolore eu exercitation sint voluptate adipisicing. Enim quis ut pariatur cupidatat non mollit magna nisi nisi occaecat velit culpa. Cillum mollit culpa deserunt cupidatat culpa.",
      },
    ]}
  />
)
