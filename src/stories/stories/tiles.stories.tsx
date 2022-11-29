import React from 'react'
import Basic from '../components/tiles/BasicIconRow'
import Grid3x3 from '../components/tiles/Grid3x3'
import svg1 from './svg/alcohol-gel.svg'
import svg2 from './svg/covid-19.svg'
import svg3 from './svg/healthcare-and-medical.svg'
import svg4 from './svg/medical-mask.svg'
import image1 from './images/omar-lopez-rwF_pJRWhAI-unsplash.jpg'
import { CenterHorizontalAndVertical } from './layout'

export default {
  title: 'Tiles'
}

const data = [
  {
    imageSrc: svg1,
    title: 'Lab minim ex enim in.',
    text: 'Sit aliquip do do non nulla deserunt amet mollit sint.',
    background: ''
  },
  {
    imageSrc: svg2,
    title: 'Laboris id etn.',
    text: 'Sit aliquip do do non nulla deserunt amet mollit sint.',
    background: ''
  },
  {
    imageSrc: svg3,
    title: 'Laid et minim minim ex enim in.',
    text: 'Sit aliquip do do non nulla deserunt amet mollit sint.',
    background: ''
  },
  {
    imageSrc: svg4,
    title: 'Laboris id et mienim in.',
    text: 'Sit aliquip do do non nulla deserunt amet mollit sint.',
    background: ''
  }
]

export const BasicIconRow = () => <Basic data={data} />
export const BasicIconRowWithBackground = () => (
  <Basic data={data.map((i) => ({ ...i, background: '#d3e7ff' }))} />
)

const gridItems = new Array(9).fill({
  backgroundColor: '#0c5ace',
  color: '#fff',
  title: 'Lorem Ipsum',

  text:
    'Est ullamco ex consequat aliquip tempor non laboris sunt ut adipisicing.'
})

const gridItems2 = [
  {
    color: '#fff',
    title: 'Lorem Ipsum',
    doubleSize: true,
    text:
      'Est ullamco ex consequat aliquip tempor non laboris suntuat aliquip tempor non laboris suntuat aliquip tempor non laboris suntuat aliquip tempor non laboris suntuat aliquip tempor non laboris sunt ut adipisicing.',
    backgroundColor: '#bc7927'
  },
  ...new Array(5).fill({
    backgroundColor: '#0c5ace',
    color: '#fff',
    title: 'Lorem Ipsum',
    text:
      'Est ullamco ex consequat aliquip tempor non laboris sunt ut adipisicing.'
  })
]

const gridItems3 = [
  {
    color: '#fff',
    title: 'Lorem Ipsum',
    doubleSize: true,
    imageSrc: image1,
    text:
      'Est ullamco ex consequat aliquip tempor non laboris suntuat aliquip tempor non ',
    backgroundColor: '#bc7927'
  },
  ...new Array(5).fill({
    backgroundColor: '#0c5ace',
    color: '#fff',
    title: 'Lorem Ipsum',
    text:
      'Est ullamco ex consequat aliquip tempor non laboris sunt ut adipisicing.'
  })
]

export const GridThreeByThree = () => (
  <CenterHorizontalAndVertical>
    <Grid3x3 items={gridItems}/>
  </CenterHorizontalAndVertical>
)

export const GridThreeByThreeGapless = () => (
  <CenterHorizontalAndVertical>
    <Grid3x3 gapless items={gridItems} />
  </CenterHorizontalAndVertical>
)

export const GridThreeByThreeWithLargeTile = () => (
  <CenterHorizontalAndVertical>
    <Grid3x3 items={gridItems2} />
  </CenterHorizontalAndVertical>
)

export const GridThreeByThreeWithLargeTileImage = () => (
  <CenterHorizontalAndVertical>
    <Grid3x3 items={gridItems3} />
  </CenterHorizontalAndVertical>
)
