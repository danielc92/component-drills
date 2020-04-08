import NewYorker from "../components/forms/NewYorker"
import Slack from "../components/forms/SlackSignIn"
import React from "react"
import { CenterHorizontalAndVertical } from "./layout"

export default {
  title: "Forms",
}

export const SlackSignInForm = () => (
  <CenterHorizontalAndVertical>
    <Slack
      title="Sign in to your workspace"
      subtitle="Enter your workspace's flack URL"
      placeholder="your-workspace-url"
      buttonText="Continue"
      helpText="Don't know your workspace URL? "
      link={{ text: "Find your workspace", url: "#" }}
      inputSideText=".flack.com"
    />
  </CenterHorizontalAndVertical>
)

export const NewYorkerForm = () => (
  <CenterHorizontalAndVertical>
    <NewYorker
      emailLabel="E-mail"
      passwordLabel="Password"
      emailPlaceholder="Your e-mail address"
      passwordPlaceholder="Your password"
      buttonText="Sign in"
      retainText="Keep me signed in"
      forgotPasswordText="Forgot password?"
    />
  </CenterHorizontalAndVertical>
)
