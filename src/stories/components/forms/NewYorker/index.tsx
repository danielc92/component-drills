import styled from "styled-components"

import React from "react"

const Form = styled.form`
  padding: 32px;
  background: #fff;
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border: 1px solid #c4c4c4;
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

const Divider = styled.div`
  height: 1px;
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

const Checkbox = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  margin: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 25px;

  .text {
    color: grey;
    font-size: 16px;
  }
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  input:checked ~ .mark {
    background-color: #000;
  }
  input:checked ~ .mark:after {
    display: block;
  }

  .mark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #f2f2f2;
  }

  .mark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .mark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`

interface IProps {
  emailLabel: string
  passwordLabel: string
  emailPlaceholder: string
  passwordPlaceholder: string
  buttonText: string
  retainText: string
  forgotPasswordText: string
}

export default function index({
  emailLabel,
  passwordLabel,
  emailPlaceholder,
  passwordPlaceholder,
  buttonText,
  retainText,
  forgotPasswordText,
}: IProps) {
  return (
    <Form>
      <Label>{emailLabel}</Label>
      <Input placeholder={emailPlaceholder}></Input>
      <Label>{passwordLabel}</Label>
      <Input placeholder={passwordPlaceholder}></Input>
      <Between>
        <Flex>
          <Checkbox>
            <span className="text">{retainText}</span>
            <input type="checkbox" />
            <span className="mark" />
          </Checkbox>
        </Flex>

        <Link>{forgotPasswordText}</Link>
      </Between>
      <Button>{buttonText}</Button>
      <Divider>
        <DividerText>or</DividerText>
      </Divider>
      <Button>Sign in with Google</Button>
    </Form>
  )
}
