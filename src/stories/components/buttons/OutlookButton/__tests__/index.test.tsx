import React from "react"
import OutlookButton from "components/buttons/OutlookButton"
import Enzyme from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { rgb } from "wcag-contrast"

Enzyme.configure({
  adapter: new Adapter(),
})

describe("Outlook button", () => {
  it("Should render successfully", () => {
    const wrapper = Enzyme.shallow(<OutlookButton>Click me!</OutlookButton>)
    expect(wrapper).toBeDefined()
  })

  it("Should contain correct text", () => {
    const wrapper = Enzyme.shallow(<OutlookButton>Click me!</OutlookButton>)
    expect(wrapper.text()).toEqual("Click me!")
  })
})
