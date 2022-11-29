import React from 'react'
import styled from 'styled-components'

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

interface IProps {
  columns: Array<{
    title: string
    links: Array<{ tag?: string, text: string, url: string }>
  }>
}
export default function index ({ columns }: IProps) {
  return (
    <Section>
      {columns.map((c, i) => (
        <Column key={i.toString()}>
          <ColumnTitle>{c.title}</ColumnTitle>
          {c.links.map((l, i2) => (
            <ColumnItem key={i2.toString()} href={l.url}>{l.text}</ColumnItem>
          ))}
        </Column>
      ))}
    </Section>
  )
}
