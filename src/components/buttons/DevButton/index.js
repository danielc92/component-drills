import React from "react"
import styled from "styled-components"

const Button = styled.a`
  border-radius: 2px;
  text-transform: uppercase;
  box-shadow: 4px 4px #4e57ef;
  background: #cfd7ff;
  padding: 8px 12px;
  text-decoration: none;
  font-weight: bold;
  color: #000;
  border: 1px solid #4e57ef;

  :hover {
    color: #fff;
    border-color: #cfd7ff;
    background: #4e57ef;
    box-shadow: 4px 4px #cfd7ff;
  }
`

export default function index({ buttonText, buttonHref }) {
  return <Button href={buttonHref}>{buttonText}</Button>
}
