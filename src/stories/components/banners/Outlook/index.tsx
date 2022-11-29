import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section<{ imageSrc: string }>`
  display: flex;
  background: blue;
  align-items: flex-end;
  height: 600px;
  background-size: cover;
  background-position: 50% 50%;
  background-image: url(${(props) => props.imageSrc});
`

const Content = styled.div`
  color: #fff;
  padding: 0 0 80px 80px;
`

const BigText = styled.h1<{ delay: string }>`
  margin: 0;
  font-size: 100px;
  animation-timing-function: ease-in;
  animation-name: moveUp;
  animation-duration: ${(props) => props.delay};

  @keyframes moveUp {
    0% {
      transform: translateY(40px);
      opacity: 0;
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`

interface IProps {
  ctaLevel1: string
  ctaLevel2: string
  ctaLevel3: string
  backgroundImageSrc: string
}
export default function index ({
  ctaLevel1,
  ctaLevel2,
  ctaLevel3,
  backgroundImageSrc
}: IProps) {
  return (
    <Wrapper imageSrc={backgroundImageSrc}>
      <Content>
        <BigText delay={'.5s'}>{ctaLevel1}</BigText>
        <BigText delay={'0.8s'}>{ctaLevel2}</BigText>
        <BigText delay={'1.1s'}>{ctaLevel3}</BigText>
      </Content>
    </Wrapper>
  )
}
