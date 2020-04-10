import React from "react"
import styled from "styled-components"

const Section = styled.section`
  background: #273443;
  display: flex;
  justify-content: space-between;
  padding: 40px 120px;
  flex-wrap: wrap;
`

const Column = styled.div`
  padding-right: 20px;
`

const ColumnTitle = styled.h5`
  color: #bcbcbc;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
`

const ColumnItem = styled.a`
  color: white;
  display: block;
  font-size: 12px;
  margin-bottom: 8px;
  text-decoration: none;
`
export default function index({ columns }) {
  return (
    <Section>
      {columns.map((c) => (
        <Column>
          <ColumnTitle>{c.title}</ColumnTitle>
          {c.links.map((l) => (
            <ColumnItem href={l.url}>{l.text}</ColumnItem>
          ))}
        </Column>
      ))}
    </Section>
  )
}
