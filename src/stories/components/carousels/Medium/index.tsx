import React, { useState } from 'react'
import styled from 'styled-components'
const Section = styled.section`
  display: flex;
`

const CtaHeader = styled.h1`
  font-size: 56px;
  width: 500px;
  font-family: "Lora", serif;
  padding-top: 80px;
  transform: translateX(120px);
  z-index: 50;
`

const Wrapper = styled.div`
  background: #baf7d6;
  height: 500px;
  width: 500px;
  padding: 1rem 1rem 1rem 10rem;
  position: relative;
  margin-top: 50px;
`

const Quote = styled.div`
  position: absolute;
  color: green;
  top: -25px;
`

const Text = styled.h3`
  font-size: 24px;
  margin-bottom: 24px;
  height: 240px;
  line-height: 1.2;
  font-family: "Lora", serif;
`

const CarouselItem = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? '' : 'none')};
`

CarouselItem.displayName = 'CarouselItem'

const CarouselButton = styled.button<{ active: boolean }>`
  width: 16px;
  height: 16px;
  outline: none;
  border: none;
  margin-right: 8px;
  border-radius: 50%;
  background: ${(props) => (props.active ? '#03A87C' : '#fff')};
  transition: all 0.24s cubic-bezier(0.165, 0.84, 0.44, 1);
`

CarouselButton.displayName = 'CarouselButton'

const CarouselButtons = styled.div`
  display: flex;
  align-items: center;
`

const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`

const AuthorText = styled.p`
  font-size: 14px;
  font-family: "Lora", serif;
  font-weight: bold;
`

const AuthorImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
`

function QuoteSvg () {
  return (
    <svg
      width="62"
      height="50"
      viewBox="0 0 62 50"
      fill="none"
      className="hl ig m"
    >
      <path
        d="M61.8 0C45.63 4.36 35.4 20.33 35.4 34.65 35.4 44.19 41.33 50 49.3 50 56.68 50 62 44.2 62 37.14c0-6.85-4.5-12.04-10.44-12.87-1.63-.2-2.25-.83-2.25-2.28 0-8.3 4.91-17.22 12.69-21.58L61.8 0zM26.6 0C10.44 4.36 0 20.33 0 34.65 0 44.19 6.14 50 13.91 50c7.37 0 12.9-5.8 12.9-12.86 0-6.85-4.5-12.04-10.44-12.87-1.84-.2-2.25-.83-2.25-2.28 0-8.3 4.91-17.22 12.69-21.58L26.6 0z"
        fill="#03A87C"
      ></path>
    </svg>
  )
}

interface IProps {
  items: MediumCarouselItem[]
  ctaText: string
}

const MediumCarousel: React.FC<IProps> = ({ items, ctaText }) => {
  const [state, setstate] = useState<{ activeItem: number }>({ activeItem: 0 })
  return (
    <Section>
      <CtaHeader>{ctaText}</CtaHeader>
      <Wrapper>
        <Quote>{QuoteSvg()}</Quote>
        {items.map((i, index) => (
          <CarouselItem
            key={index.toString()}
            active={index === state.activeItem}
          >
            <Text>{i.text}</Text>
            <AuthorWrapper>
              <AuthorImage src={i.authorUrl}></AuthorImage>
              <AuthorText>{i.authorName}</AuthorText>
            </AuthorWrapper>
          </CarouselItem>
        ))}
        <CarouselButtons>
          {items.map((i, index) => (
            <CarouselButton
              key={index.toString()}
              active={index === state.activeItem}
              onClick={() => setstate({ activeItem: index })}
            />
          ))}
        </CarouselButtons>
      </Wrapper>
    </Section>
  )
}

export default MediumCarousel
