import React from "react"
import "../App.css"
import OutlookButton from "../components/buttons/OutlookButton"
import StorybookButton from "../components/buttons/StorybookButton"
export default {
  title: "Buttons",
  component: OutlookButton
}

export const OutlookButtonRegular = () => (
  <OutlookButton>Create an account</OutlookButton>
)

export const OutlookButtonHollow = () => (
  <OutlookButton hollow>Create an account</OutlookButton>
)

export const StorybookPrimary = () => <StorybookButton text="Click me" />

export const StorybookSecondary = () => (
  <StorybookButton secondary text="Click me" />
)
