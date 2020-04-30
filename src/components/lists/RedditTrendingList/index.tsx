import React from "react"
import styled from "styled-components"

const Card = styled.div`
  border-radius: 4px;
  max-width: 300px;
  border: 1px solid #cccccc;
  padding: 24px 16px;
`
const Title = styled.h5`
  margin: 0 0 12px 0;
`

const CommunityIcon = styled.img`
  width: 26px;
  height: 26px;
  margin-right: 12px;
`

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

const IconInfoWrapper = styled.div`
  display: flex;
  margin-right: 12px;
`

const CommunityInfo = styled.div`
  text-align: left;
`
const CommunityButton = styled.a`
  display: block;
  padding: 8px 36px;
  color: white;
  font-weight: bold;
  background: #0079d3;
  font-size: 12px;
  text-transform: uppercase;
  border-radius: 4px;
`

const Name = styled.p`
  margin: 0;
  font-size: 12px;
`
const Members = styled.p`
  color: gray;
  margin: 0;
  font-size: 12px;
`
export default function index({ title, items }) {
  return (
    <Card>
      <Title>{title}</Title>
      {items.map((i) => (
        <ItemContainer>
          <IconInfoWrapper>
            <CommunityIcon src={i.imageSrc} />
            <CommunityInfo>
              <Name>{i.name}</Name>
              <Members>{i.members}</Members>
            </CommunityInfo>
          </IconInfoWrapper>

          <CommunityButton>Join</CommunityButton>
        </ItemContainer>
      ))}
    </Card>
  )
}
