import React from "react"
import StorybookButton from "components/buttons/StorybookButton"
import Enzyme from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { rgb } from "wcag-contrast"

Enzyme.configure({
  adapter: new Adapter(),
})

describe("Storybook Button", () => {
  it("Should render successfully", () => {
    const wrapper = Enzyme.shallow(<StorybookButton>Click me!</StorybookButton>)
    expect(wrapper).toBeDefined()
  })

  it("Should contain correct text", () => {
    const wrapper = Enzyme.shallow(<StorybookButton text="Click me!" />)
    expect(wrapper.text()).toEqual("Click me!")
  })

  it("Secondary should have pink foreground", () => {
    const wrapper = Enzyme.mount(<StorybookButton secondary text="Click me!" />)
    const color = getComputedStyle(wrapper.getDOMNode()).getPropertyValue(
      "color"
    )
    const trimmedColor = color.split(" ").join("")
    expect(trimmedColor).toEqual("rgb(255,71,133)")
  })

  it("Secondary should have white background", () => {
    const wrapper = Enzyme.mount(<StorybookButton secondary text="Click me!" />)
    const color = getComputedStyle(wrapper.getDOMNode()).getPropertyValue(
      "background-color"
    )
    const trimmedColor = color.split(" ").join("")
    expect(trimmedColor).toEqual("rgb(255,255,255)")
  })
})
