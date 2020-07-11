import styled from "styled-components"
import React from "react"

const Button = styled.button<{ secondary: boolean }>`
  color: ${(props) => (props.secondary ? "rgb(255,71,133)" : "rgb(255,255,255)")};
  font-size: 14px;
  outline: none;
  border: ${(props) =>
    props.secondary ? "1px solid rgb(255,71,133)" : "none"};
  background: ${(props) => (props.secondary ? "rgb(255,255,255)" : " rgb(255,71,133)")};
  border-radius: 20px;
  padding: 8px 40px;
  font-weight: bold;
`
interface IProps {
  text: string
  secondary: boolean
}
export default function StorybookButton({ text, secondary }: IProps) {
  return <Button secondary={secondary}>{text}</Button>
}
