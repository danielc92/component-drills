import React from "react"
import "../App.css"
import Dev from "../components/buttons/DevButton"
import OutlookButton from "../components/buttons/OutlookButton"
import StorybookButton from "../components/buttons/StorybookButton"
import styled from "styled-components"
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs"

export default {
  title: "Buttons",
  component: OutlookButton,
  decorators: [withKnobs],
}

// A wrapper to center buttons
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const OutlookButtonRegular = () => (
  <ButtonWrapper>
    <OutlookButton>Create an account</OutlookButton>
  </ButtonWrapper>
)

export const OutlookButtonHollow = () => (
  <ButtonWrapper>
    <OutlookButton hollow>Create an account</OutlookButton>
  </ButtonWrapper>
)

export const DevButton = () => (
  <ButtonWrapper>
    <Dev buttonText="Click me" buttonHref="#" />
  </ButtonWrapper>
)

export const StorybookPrimary = () => {
  const dynamicText = text("Button text", "Click me")
  const dynamicSecondary = boolean("Secondary", false)
  return (
    <ButtonWrapper>
      <StorybookButton text={dynamicText} secondary={dynamicSecondary} />
    </ButtonWrapper>
  )
}

export const StorybookSecondary = () => (
  <ButtonWrapper>
    <StorybookButton secondary text="Click me" />
  </ButtonWrapper>
)
