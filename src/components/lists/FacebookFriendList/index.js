import React from "react"
import styled from "styled-components"
import faker from "faker"

const Wrapper = styled.div`
  border-radius: 2px;
  border: 1px solid #dcdcdc;
  max-width: 600px;
  margin: auto;
`

const Header = styled.div`
  padding: 16px;
  font-weight: bold;
  border-bottom: 1px solid #dcdcdc;
`

const FriendItem = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dcdcdc;
  padding: 8px 0;
`
const Info = styled.div`
  display: flex;
  align-items: center;
`
const Avatar = styled.img`
  width: 80px;
  height: 80px;
  background-position: cover;
`
const Name = styled.a`
  font-size: 18px;
  color: #365899;
  font-weight: bold;
  cursor: pointer;
`

const Suggest = styled.p`
  font-size: 12px;
  color: grey;
  margin: 6px 0 0 0;
`
const Description = styled.div`
  padding: 8px;
`
const ButtonGroup = styled.div`
  display: flex;
`
const Button = styled.a`
  border: 1px solid black;
  background: ${props => (props.secondary ? "#EBEDF0" : "#365899")};
  color: ${props => (props.secondary ? "#5b5b5b" : "#fff")};
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 2px;
  outline: none;
  border: none;
  margin-right: 6px;
  font-weight: bold;
`

const Content = styled.div`
  padding: 16px;
`

export default function index({ friends }) {
  return (
    <Wrapper>
      <Header>People You May Know</Header>
      <Content>
        {friends.map(i => (
          <FriendItem>
            <Info>
              <Avatar src={i.src}></Avatar>
              <Description>
                <Name>{i.name}</Name>
                <Suggest>{i.mutualText}</Suggest>
              </Description>
            </Info>
            <ButtonGroup>
              <Button>{i.buttonText}</Button>
              <Button secondary>{i.buttonText2}</Button>
            </ButtonGroup>
          </FriendItem>
        ))}
      </Content>
    </Wrapper>
  )
}
