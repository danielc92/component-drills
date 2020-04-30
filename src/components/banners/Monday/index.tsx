import React from "react"
import styled from "styled-components"

const Section = styled.section``

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  padding: 48px 0;
`

const CtaHeader = styled.h1`
  margin: 0 0 24px 0;
  font-size: 48px;
`

const CtaSubHeader = styled.p`
  margin: 0 0 24px 0;
`

const Button = styled.a`
  display: inline-block;
  border-radius: 30px;
  padding: 16px 40px;
  background-color: #d90364;
  color: #fff;
  cursor: pointer;
`

const ButtonText = styled.span``

const ButtonIconWrapper = styled.span`
  margin-left: 16px;
`

const Span = styled.span<{ highlight: boolean }>`
  color: ${(props) => (props.highlight ? "#00CA72" : "#000")};
`
interface IProps {
  title: string
  subTitle: string
  buttonText: string
  buttonLink: string
}
export default function index({
  title,
  subTitle,
  buttonText,
  buttonLink,
}: IProps) {
  return (
    <Section>
      <Container>
        <CtaHeader>
          {title.split(" ").map((i: string, index: number) => {
            if (index === 0) {
              return <Span highlight>{i}&nbsp;</Span>
            }
            return i + " "
          })}
        </CtaHeader>
        <CtaSubHeader>{subTitle}</CtaSubHeader>
        <Button href={buttonLink}>
          <ButtonText>{buttonText}</ButtonText>
          <ButtonIconWrapper>
            <svg
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="14"
              viewBox="0 0 8 14"
            >
              <path d="M.313 12.045l5.113-5.112L.313 1.821A1.065 1.065 0 1 1 1.82.312L7.687 6.18a1.064 1.064 0 0 1 0 1.508L1.82 13.554a1.065 1.065 0 1 1-1.507-1.508z"></path>
            </svg>
          </ButtonIconWrapper>
        </Button>
      </Container>
    </Section>
  )
}
