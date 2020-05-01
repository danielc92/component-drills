import React from "react"
import styled from "styled-components"

const Section = styled.section`
  background: #f5f5f5;
  display: flex;
  justify-content: space-between;
  padding: 40px 120px;
  flex-wrap: wrap;
`

const Column = styled.div`
  padding-right: 20px;
`

const ColumnTitle = styled.h5`
  color: #000;
  font-size: 20px;
`

const ColumnItem = styled.a`
  display: block;
  font-size: 16px;
  margin: 0 0 20px 0;
  color: #999;
  font-weight: bold;
  text-decoration: none;
  transition: 0.25s ease-in;

  :hover {
    color: #000;
  }
`

const Tag = styled.span`
  padding: 2px 4px;
  text-transform: capitalize;
  color: #fff;
  font-family: monospace;
  background: #999;
  font-weight: normal;
  margin-left: 8px;
  font-size: 12px;
`
interface IProps {
  columns: Array<{
    title: string
    links: Array<{ tag: string; text: string; url: string }>
  }>
}
export default function index({ columns }: IProps) {
  return (
    <Section>
      {columns.map((c) => (
        <Column>
          <ColumnTitle>{c.title}</ColumnTitle>
          {c.links.map((l) => (
            <ColumnItem href={l.url}>
              {l.text}
              {l.tag ? <Tag>{l.tag}</Tag> : null}
            </ColumnItem>
          ))}
        </Column>
      ))}
    </Section>
  )
}
