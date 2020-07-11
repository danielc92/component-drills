import React from "react"
import Button from "components/buttons/DevButton"
import Enzyme from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { rgb } from "wcag-contrast"
Enzyme.configure({
  adapter: new Adapter(),
})
describe("Dev Button", () => {
  it("Renders successfully", () => {
    const wrapper = Enzyme.shallow(
      <Button buttonText="Click me!" buttonHref="https://google.com" />
    )
    expect(wrapper).toBeDefined()
  })

  it("Renders text successfully", () => {
    const wrapper = Enzyme.shallow(
      <Button buttonText="Click me!" buttonHref="https://google.com" />
    )
    expect(wrapper.text()).toEqual("Click me!")
  })

  it("Meets accessibility contrast standard of 7.0", () => {
    const wrapper = Enzyme.mount(
      <Button buttonText="Click me!" buttonHref="https://google.com" />
    )
    const domNode = wrapper.getDOMNode()
    const style = getComputedStyle(domNode)
    const backgroundColorText = style.getPropertyValue("background-color")
    const colorText = style.getPropertyValue("color")
    const backgroundColorArray = backgroundColorText.match(/\d+/g)
    const colorArray = colorText.match(/\d+/g)
    expect(colorArray.length).toEqual(3)
    expect(backgroundColorArray.length).toEqual(3)
    const contrastScore = rgb(colorArray, backgroundColorArray)
    expect(contrastScore).toBeGreaterThanOrEqual(7)
  })

  it("Meets legible font size", () => {
    const wrapper = Enzyme.mount(
      <Button buttonText="Click me!" buttonHref="https://google.com" />
    )
    const domNode = wrapper.getDOMNode()
    const style = getComputedStyle(domNode)
    const fontSizeText = style.getPropertyValue("font-size")
    expect(fontSizeText).toEqual("16px")
  })
})
