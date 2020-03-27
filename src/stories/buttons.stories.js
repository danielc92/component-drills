import React from "react"
import "../App.css"
import OutlookButton from "../components/buttons/OutlookButton"

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
