import React from 'react'
import styled from 'styled-components'

const brand = '#FFCC00'
const Section = styled.section`
  background: #f2f2f2;
`

const Container = styled.div<{ backgroundImage: string }>`
  max-width: 1200px;
  margin: 0 auto;
  background: red;
  height: 500px;
  background-image: url(${(props) => props.backgroundImage});
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  align-items: center;
  padding: 40px;
`

const CtaBox = styled.div`
  padding: 32px 0;
  width: 44%;
  background: white;
  display: flex;
  align-items: center;
  position: absolute;
  animation: kf 2.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  @keyframes kf {
    0% {
      transform: translateY(40px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  @media (max-width: 850px) {
    bottom: 0;
    width: 90%;
  }
`

const CtaBoxInner = styled.div`
  width: 100%;
  border-left: 16px solid ${brand};
  padding: 24px;
  position: relative;
`

const Header = styled.h1`
  margin: 0 0 24px 0;
  font-size: 32px;
`

const SubHeader = styled.p`
  margin: 0 0 24px 0;
`

const Button = styled.a`
  outline: 0;
  border-radius: 30px;
  border: 1px solid #000;
  padding: 12px 40px;
  display: inline-block;
`

interface IProps {
  image: string
  ctaHeader: string
  ctaSubHeader: string
  ctaButtonText: string
}
export default function index ({
  image,
  ctaHeader,
  ctaSubHeader,
  ctaButtonText
}: IProps) {
  return (
    <Section>
      <Container backgroundImage={image}>
        <CtaBox>
          <CtaBoxInner>
            <Header>{ctaHeader}</Header>
            <SubHeader>{ctaSubHeader}</SubHeader>
            <Button>{ctaButtonText}</Button>
          </CtaBoxInner>
        </CtaBox>
      </Container>
    </Section>
  )
}
