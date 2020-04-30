import React from "react"
import styled from "styled-components"

const TagGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Tag = styled.div`
  display: flex;
  align-items: center;
  background: #f3f3f3;
  padding: 4px 6px;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 18px;
`
const TagImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  margin-right: 8px;
`

const TagText = styled.p`
  margin: 0;
`

export default function index({ tags, rounded }) {
  return (
    <TagGroup>
      {tags.map((t) => (
        <Tag rounded={rounded}>
          <TagImage src={t.src}></TagImage>
          <TagText>{t.text}</TagText>
        </Tag>
      ))}
    </TagGroup>
  )
}
