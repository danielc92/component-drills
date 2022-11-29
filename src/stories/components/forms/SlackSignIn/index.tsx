import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  max-width: 700px;
  margin: 0 auto;
  border-radius: 2px;
  border: 1px solid #dcdcdc;
  text-align: center;
`

const Content = styled.div`
  padding: 80px 125px;
  display: grid;
  gap: 24px;
`
const Title = styled.h1`
  font-size: 36px;
  margin: 0;
`

const SubTitle = styled.p`
  margin: 0;
`

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Input = styled.input`
  padding: 20px;
  width: 200px;
  margin-right: 8px;
  text-align: right;
  font-size: 18px;
  outline: none;
  border: 1px solid grey;
  border-radius: 4px;
  ::placeholder {
    color: grey;
  }
`

const InputHelpText = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`

const Button = styled.a`
  display: block;
  background: #007a5a;
  color: white;
  font-weight: bold;
  padding: 16px;
  border-radius: 4px;
  font-size: 18px;
`

const Link = styled.a`
  color: #1264a3;
  text-decoration: none;
  font-weight: bold;
`
interface IProps {
  title: string
  subtitle: string
  placeholder: string
  buttonText: string
  inputSideText: string
  helpText: string
  link: { url: string, text: string }
}
export default function index ({
  title,
  subtitle,
  placeholder,
  buttonText,
  inputSideText,
  helpText,
  link
}: IProps) {
  return (
    <Wrapper>
      <Content>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <InputWrapper>
          <Input placeholder={placeholder} />
          <InputHelpText>{` ${inputSideText}`}</InputHelpText>
        </InputWrapper>
        <Button>{buttonText}</Button>
        <SubTitle>
          {helpText}
          <Link href={link.url}>{link.text}</Link>
        </SubTitle>
      </Content>
    </Wrapper>
  )
}
