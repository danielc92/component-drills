import styled from "styled-components"
import React from "react"

const Button = styled.button`
  color: ${props => (props.secondary ? "rgb(255,71,133)" : "#fff")};
  font-size: 14px;
  outline: none;
  border: ${props => (props.secondary ? "1px solid rgb(255,71,133)" : "none")};
  background: ${props => (props.secondary ? "#fff" : " rgb(255,71,133)")};
  border-radius: 20px;
  padding: 8px 40px;
  font-weight: bold;
`

export default function index({ text, secondary }) {
  return <Button secondary={secondary}>{text}</Button>
}
