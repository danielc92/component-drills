import React from "react"
import styled from "styled-components"

const Wrapper = styled.section`
  max-width: 1000px;
  display: flex;
  margin: 0 auto;
  height: 450px;
`

const ImageSection = styled.div`
  width: 50%;
  object-position: cover;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`
const TextSection = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #444444;
`

const Content = styled.div`
  padding: 40px 60px;
`

const Title = styled.h3`
  margin: 0 0 36px 0;
  color: white;
  font-size: 28px;
  text-transform: uppercase;
  letter-spacing: 3.4px;
`
const Link = styled.a`
  color: white;
  margin: 0 0 12px 0;
  display: inline-block;
  font-size: 16px;
  text-decoration: none;
  padding-bottom: 4px;
  border-bottom: 1px solid white;
`

interface IProps {
  imageSrc: string
  title: string
  links: { url: string; text: string }[]
}
export default function index({ imageSrc, title, links }: IProps) {
  return (
    <Wrapper>
      <TextSection>
        <Content>
          <Title>{title}</Title>
          {links.map((i) => (
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <Link href={i.url}>{i.text} ></Link>
            </div>
          ))}
        </Content>
      </TextSection>
      <ImageSection>
        <Image src={imageSrc} />
      </ImageSection>
    </Wrapper>
  )
}
