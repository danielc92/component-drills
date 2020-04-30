import React from "react"
import styled from "styled-components"

const Note = styled.div`
  text-align: ${(props) => (props.centered === true ? "center" : "none")};
  max-width: 768px;
  background: ${(props) =>
    props.type === "danger"
      ? "#f7d7d7"
      : props.type === "success"
      ? "#d2f4cd"
      : props.type === "primary"
      ? "#cfeaf7"
      : "#f2f2f2"};

  color: #494949;
  border-radius: ${(props) => (props.rounded ? "4px" : "0px")};
`

const NoteHeader = styled.h5`
  border-top-right-radius: ${(props) => (props.rounded ? "4px" : "0px")};
  border-top-left-radius: ${(props) => (props.rounded ? "4px" : "0px")};
  margin: 0;
  padding: 16px 24px;
  background-color: ${(props) =>
    props.type === "danger"
      ? "#d13434"
      : props.type === "success"
      ? "#50b75e"
      : props.type === "primary"
      ? "#3b76ed"
      : "#494949"};
  color: #fff;
`
const NoteContent = styled.div`
  padding: 24px;
`
const NoteText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
`
export default function index({
  centered,
  title,
  text,
  type,
  rounded,
  borderStyle,
}) {
  return (
    <Note
      centered={centered}
      type={type}
      rounded={rounded}
      borderStyle={borderStyle}
    >
      <NoteHeader rounded={rounded} type={type}>
        {title}
      </NoteHeader>
      <NoteContent>
        <NoteText>{text}</NoteText>
      </NoteContent>
    </Note>
  )
}
