import styled from "styled-components"

import React from "react"

const FormWrapper = styled.div`
  background: #f7f7f7;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Form = styled.form`
  padding: 32px;
  background: #fff;
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  padding: 12px;
  margin-bottom: 24px;
  font-size: 18px;
  outline: none;
  border: 1px solid #c4c4c4;
  ::placeholder {
    color: #c4c4c4;
  }
`
const Label = styled.label`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 12px;
`
const CheckBoxWrapper = styled.div`
  position: relative;
`
const CheckBox = styled.input`
  margin-right: 8px;
  height: 25px;
  width: 25px;

  ::after {
    background: black;
  }
`

const Button = styled.button`
  outline: none;
  border: none;
  padding: 16px;
  background: black;
  color: white;
  margin-bottom: 24px;
  font-size: 16px;
`

const Between = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`
const Link = styled.a`
  color: grey;
  font-size: 18px;
`
const Flex = styled.div`
  display: flex;
  align-items: center;
`
const Text = styled.p`
  margin: 0;
  color: grey;
  font-size: 18px;
`

const Divider = styled.div`
  height: 2px;
  background: #c4c4c4;
  position: relative;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
`
const DividerText = styled.div`
  position: absolute;
  color: black;
  padding: 0 16px;
  height: 20px;
  top: -10px;
  background: white;
  font-weight: bold;
`
export default function index({
  emailLabel,
  passwordLabel,
  emailPlaceholder,
  passwordPlaceholder,
  buttonText,
  retainText,
  forgotPasswordText
}) {
  return (
    <FormWrapper>
      <Form>
        <Label>{emailLabel}</Label>
        <Input placeholder={emailPlaceholder}></Input>
        <Label>{passwordLabel}</Label>
        <Input placeholder={passwordPlaceholder}></Input>
        <Between>
          <Flex>
            <CheckBox type="checkbox"></CheckBox>
            <Text>{retainText}</Text>
          </Flex>

          <Link>{forgotPasswordText}</Link>
        </Between>
        <Button>{buttonText}</Button>
        <Divider>
          <DividerText>or</DividerText>
        </Divider>
        <Button>Sign in with Google</Button>
      </Form>
    </FormWrapper>
  )
}
