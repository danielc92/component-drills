import React from "react"
import styled from "styled-components"

const Button = styled.a`
  border-radius: 2px;
  text-transform: uppercase;
  box-shadow: 4px 4px #4e57ef;
  background-color: #cfd7ff;
  padding: 8px 12px;
  text-decoration: none;
  font-weight: bold;
  /* color: #cfd7ff; */
  color: #000;
  border: 1px solid #4e57ef;

  :hover {
    color: #fff;
    border-color: #cfd7ff;
    background-color: #4e57ef;
    box-shadow: 4px 4px #cfd7ff;
  }
`
interface IProps {
  buttonText: string
  buttonHref: string
}
export default function index({ buttonText, buttonHref }: IProps) {
  return <Button href={buttonHref}>{buttonText}</Button>
}
