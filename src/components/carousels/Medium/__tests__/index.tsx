import React from "react"
import Enzyme from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import MediumCarousel from "components/carousels/Medium"

Enzyme.configure({
  adapter: new Adapter(),
})

const items: MediumCarouselItem[] = [
  {
    authorName: "Daniel",
    authorUrl: "#",
    text: "Cool beans",
  },
  {
    authorName: "Kane",
    authorUrl: "#",
    text: "Cool jeans",
  },
]

const ctaText = "Lorem ipsum"

describe("Medium Carousel Suite", () => {
  let wrapper: null | Enzyme.ReactWrapper = null

  beforeAll(() => {
    wrapper = Enzyme.mount(<MediumCarousel ctaText={ctaText} items={items} />)
  })
  it("Should render carousel successfully", () => {
    expect(wrapper).toBeDefined()
  })

  it("Should include cta text in h1", () => {
    expect(wrapper?.find("h1").text()).toBe(ctaText)
  })

  it("Should render an amount of buttons matching the length of items passed in", () => {
    expect(wrapper?.find("button").length).toBe(items.length)
  })

  it("There is one 'active' carousel item by default", () => {
    expect(
      wrapper?.findWhere(
        (n) => n.name() === "CarouselItem" && n.prop("active") === true
      )
    ).toHaveLength(1)
  })

  it("After the second button, the active text should change to 'Cool Jeans'", () => {
    // Note: wrapper must be clicked before running findWhere. This cant be done in one line.
    wrapper?.find("button").at(1).simulate("click")

    expect(
      wrapper
        ?.findWhere(
          (node) =>
            node.name() === "CarouselItem" && node.prop("active") === true
        )
        .at(0)
        .find("h3")
        .text()
    ).toBe("Cool jeans")
  })
})
