import NewYorker from "../components/forms/NewYorker"
import React from "react"

export default {
  title: "Forms"
}

export const NewYorkerForm = () => (
  <NewYorker
    emailLabel="E-mail"
    passwordLabel="Password"
    emailPlaceholder="Your e-mail address"
    passwordPlaceholder="Your password"
    buttonText="Sign in"
    retainText="Keep me signed in"
    forgotPasswordText="Forgot password?"
  />
)
