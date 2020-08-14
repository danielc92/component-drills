import AccessibleTabs from "components/tabs/AccessibleTabs"
import React from "react"

export default {
  title: "Tabs",
}

const data: Array<IAccessibleTab> = [
  {
    buttonText: "Fruit",
    buttonId: "fruit",
    panelContent:
      "Dolor culpa ipsum laboris veniam. Voluptate voluptate deserunt ex ex tempor nostrud incididunt laborum aliquip aliqua. Sint est sit incididunt reprehenderit deserunt irure exercitation pariatur id ipsum.",
  },
  {
    buttonText: "Vegetables",
    buttonId: "vegetables",
    panelContent:
      "Elit deserunt dolor officia veniam duis exercitation. Ipsum enim quis proident laboris minim ullamco esse consectetur esse cillum minim sint. Voluptate veniam minim ullamco dolore dolor consequat cupidatat non magna ullamco laboris occaecat ad reprehenderit. Ipsum sit officia tempor do est laboris reprehenderit veniam dolore. Laborum amet incididunt aliquip cillum dolor excepteur elit quis. Sunt voluptate minim Lorem amet sit quis cillum consequat id.",
  },
  {
    buttonText: "Grains",
    buttonId: "grains",
    panelContent:
      "Minim Lorem non aute consectetur non irure quis duis occaecat. Exercitation pariatur consequat adipisicing ipsum. Ea labore ad mollit incididunt aliquip cillum amet aliquip. Officia aute adipisicing consectetur nostrud voluptate pariatur laborum occaecat ex et commodo mollit in id. Fugiat incididunt do aliquip eiusmod id ullamco officia minim in adipisicing ullamco quis consequat cillum.",
  },
]

export const AccessibleTabExample = () => <AccessibleTabs tabs={data} />

