import React from 'react'
import AccessibleTabs from '../components/tabs/AccessibleTabs'
import { CenterHorizontalAndVertical } from './layout'

export default {
  title: 'Tabs'
}

const data: ArrayTwoOrMore<IAccessibleTab> = [
  {
    buttonText: 'Fruit',
    buttonId: 'fruit',
    tabPanelId: 'fruit-panel',
    panelContent:
      'Kinim Lorem non aute consectetur non irure quis duis occaecat. Exercitation pariatur consequat adipisicing ipsum. Ea labore ad mollit incididunt aliquip cillum amet aliquip. Officia aute adipisicing consectetur nostrud voluptate pariatur laborum occaecat ex et commodo mollit in id. Fugiat incididunt do aliquip eiusmod id ullamco officia minim in adipisicing ullamco quis consequat cillum.'
  },
  {
    buttonText: 'Vegetables',
    buttonId: 'vegetables',
    tabPanelId: 'vegetables-panel',
    panelContent:
      'Jinim Lorem non aute consectetur non irure quis duis occaecat. Exercitation pariatur consequat adipisicing ipsum. Ea labore ad mollit incididunt aliquip cillum amet aliquip. Officia aute adipisicing consectetur nostrud voluptate pariatur laborum occaecat ex et commodo mollit in id. Fugiat incididunt do aliquip eiusmod id ullamco officia minim in adipisicing ullamco quis consequat cillum.'
  },
  {
    buttonText: 'Grains',
    buttonId: 'grains',
    tabPanelId: 'grains-panel',
    panelContent:
      'Minim Lorem non aute consectetur non irure quis duis occaecat. Exercitation pariatur consequat adipisicing ipsum. Ea labore ad mollit incididunt aliquip cillum amet aliquip. Officia aute adipisicing consectetur nostrud voluptate pariatur laborum occaecat ex et commodo mollit in id. Fugiat incididunt do aliquip eiusmod id ullamco officia minim in adipisicing ullamco quis consequat cillum.'
  }
]

export const AccessibleTabExample = () => (
  <CenterHorizontalAndVertical>
    <AccessibleTabs tabs={data} tabsDescription="food group" />
  </CenterHorizontalAndVertical>
)
