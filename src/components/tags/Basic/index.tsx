import React from "react"
import styled from "styled-components"

const TagGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Tag = styled.div`
  color: ${(props) => (props.color ? props.color : "#000")};
  background: ${(props) => (props.background ? props.background : "#cecece")};
  padding: 4px 12px;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: ${(props) => (props.rounded ? "20px" : "")};
`

export default function index({ tags, rounded }) {
  return (
    <TagGroup>
      {tags.map((t) => (
        <Tag color={t.color} background={t.background} rounded={rounded}>
          {t.text}
        </Tag>
      ))}
    </TagGroup>
  )
}
