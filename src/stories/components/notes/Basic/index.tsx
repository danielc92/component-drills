import React from "react"
import styled from "styled-components"

const Note = styled.div<{
  type?: "danger" | "success" | "primary"
  borderStyle?: string
  rounded: boolean
}>`
  padding: 24px;
  max-width: 768px;
  background: ${(props) =>
    props.type === "danger"
      ? "#f7d7d7"
      : props.type === "success"
      ? "#d2f4cd"
      : props.type === "primary"
      ? "#cfeaf7"
      : "#f2f2f2"};
  border-color: ${(props) =>
    props.type === "danger"
      ? "#d13434"
      : props.type === "success"
      ? "#50b75e"
      : props.type === "primary"
      ? "#3b76ed"
      : "#494949"};
  color: #494949;
  border-width: ${(props) =>
    props.borderStyle === "left" ? "0 0 0 6px" : "1px"};
  border-radius: ${(props) => (props.rounded ? "4px" : "0px")};
  border-style: solid;
`

const NoteHeader = styled.h3`
  margin: 0 0 12px 0;
`

const NoteText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
`
interface IProps {
  title: string
  text: string
  type?: "danger" | "success" | "primary"
  rounded: boolean
  borderStyle?: string
}
export default function index({
  title,
  text,
  type,
  rounded,
  borderStyle,
}: IProps) {
  return (
    <Note type={type} rounded={rounded} borderStyle={borderStyle}>
      <NoteHeader>{title}</NoteHeader>
      <NoteText>{text}</NoteText>
    </Note>
  )
}
