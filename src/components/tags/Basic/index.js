import React from "react"
import styled from "styled-components"

const TagGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Tag = styled.div`
  background: #f3f3f3;
  padding: 4px 12px;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: ${(props) => (props.rounded ? "20px" : "")};
`

export default function index({ tags, rounded }) {
  return (
    <TagGroup>
      {tags.map((t) => (
        <Tag rounded={rounded}>{t.text}</Tag>
      ))}
    </TagGroup>
  )
}
