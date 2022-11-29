import React from 'react'
import styled from 'styled-components'

const Banner = styled.div<{ imageSrc: string }>`
  background-image: url(${(props) => props.imageSrc});
  background-size: cover;
  background-position: 50% 50%;
  color: white;
  text-align: center;
  padding: 48px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
`

const Header = styled.h1`
  font-size: 56px;
  margin-bottom: 24px;
  text-shadow: 1px 2px 2px darkgray;
`

const SubHeader = styled.p`
  font-size: 18px;
  margin-bottom: 24px;
  text-shadow: 1px 2px 2px darkgray;
`

const Content = styled.div``

interface IProps {
  header: string
  subHeader: string
  imageSrc: string
}

export default function index ({ header, subHeader, imageSrc }: IProps) {
  return (
    <Banner imageSrc={imageSrc}>
      <Content>
        <Header>{header}</Header>
        <SubHeader>{subHeader}</SubHeader>
      </Content>
    </Banner>
  )
}
