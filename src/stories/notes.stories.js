import React from "react"
import { CenterHorizontalAndVertical } from "./layout"
import Basic from "../components/notes/Basic"
import BasicWithHeader from "../components/notes/Header"

export default {
  title: "Notes",
}

export const BasicDefault = () => (
  <CenterHorizontalAndVertical>
    <Basic
      title="Officia aliquip eu ad"
      text="Dolore por fugiat cupidatat aliqua dolore incididunt. Cillum incididunt cupidatat dolor dolor Lorem duis reprehenderit ea magna duis officia. Eiusmod incididunt ipsum dolore voluptate ipsum ullamco. Tempor exercitation reprehenderit quis officia aliqua fugiat mollit adipisicing mollit exercitation ut ea laboris. Sint enim id ea eiusmod. Aute aliquip consequat labore consectetur dolore elit ut laborum."
      type=""
    />
  </CenterHorizontalAndVertical>
)

export const BasicDanger = () => (
  <CenterHorizontalAndVertical>
    <Basic
      title="Officia aliquip eu ad"
      text="Dolore por fugiat cupidatat aliqua dolore incididunt. Cillum incididunt cupidatat dolor dolor Lorem duis reprehenderit ea magna duis officia. Eiusmod incididunt ipsum dolore voluptate ipsum ullamco. Tempor exercitation reprehenderit quis officia aliqua fugiat mollit adipisicing mollit exercitation ut ea laboris. Sint enim id ea eiusmod. Aute aliquip consequat labore consectetur dolore elit ut laborum."
      type="danger"
    />
  </CenterHorizontalAndVertical>
)

export const BasicSuccess = () => (
  <CenterHorizontalAndVertical>
    <Basic
      title="Officia aliquip eu ad"
      text="Dolore por fugiat cupidatat aliqua dolore incididunt. Cillum incididunt cupidatat dolor dolor Lorem duis reprehenderit ea magna duis officia. Eiusmod incididunt ipsum dolore voluptate ipsum ullamco. Tempor exercitation reprehenderit quis officia aliqua fugiat mollit adipisicing mollit exercitation ut ea laboris. Sint enim id ea eiusmod. Aute aliquip consequat labore consectetur dolore elit ut laborum."
      type="success"
    />
  </CenterHorizontalAndVertical>
)

export const BasicPrimary = () => (
  <CenterHorizontalAndVertical>
    <Basic
      title="Officia aliquip eu ad"
      text="Dolore por fugiat cupidatat aliqua dolore incididunt. Cillum incididunt cupidatat dolor dolor Lorem duis reprehenderit ea magna duis officia. Eiusmod incididunt ipsum dolore voluptate ipsum ullamco. Tempor exercitation reprehenderit quis officia aliqua fugiat mollit adipisicing mollit exercitation ut ea laboris. Sint enim id ea eiusmod. Aute aliquip consequat labore consectetur dolore elit ut laborum."
      type="primary"
    />
  </CenterHorizontalAndVertical>
)

export const BasicSuccessRounded = () => (
  <CenterHorizontalAndVertical>
    <Basic
      rounded
      title="Officia aliquip eu ad"
      text="Dolore por fugiat cupidatat aliqua dolore incididunt. Cillum incididunt cupidatat dolor dolor Lorem duis reprehenderit ea magna duis officia. Eiusmod incididunt ipsum dolore voluptate ipsum ullamco. Tempor exercitation reprehenderit quis officia aliqua fugiat mollit adipisicing mollit exercitation ut ea laboris. Sint enim id ea eiusmod. Aute aliquip consequat labore consectetur dolore elit ut laborum."
      type="success"
    />
  </CenterHorizontalAndVertical>
)
export const BasicSuccessRoundedLeft = () => (
  <CenterHorizontalAndVertical>
    <Basic
      rounded
      title="Officia aliquip eu ad"
      text="Dolore por fugiat cupidatat aliqua dolore incididunt. Cillum incididunt cupidatat dolor dolor Lorem duis reprehenderit ea magna duis officia. Eiusmod incididunt ipsum dolore voluptate ipsum ullamco. Tempor exercitation reprehenderit quis officia aliqua fugiat mollit adipisicing mollit exercitation ut ea laboris. Sint enim id ea eiusmod. Aute aliquip consequat labore consectetur dolore elit ut laborum."
      type="success"
      borderStyle="left"
    />
  </CenterHorizontalAndVertical>
)

export const WithHeaderPrimaryRounded = () => (
  <CenterHorizontalAndVertical>
    <BasicWithHeader
      rounded
      title="Officia aliquip eu ad"
      text="Dolore por fugiat cupidatat aliqua dolore incididunt. Cillum incididunt cupidatat dolor dolor Lorem duis reprehenderit ea magna duis officia. Eiusmod incididunt ipsum dolore voluptate ipsum ullamco. Tempor exercitation reprehenderit quis officia aliqua fugiat mollit adipisicing mollit exercitation ut ea laboris. Sint enim id ea eiusmod. Aute aliquip consequat labore consectetur dolore elit ut laborum."
      type="primary"
    ></BasicWithHeader>
  </CenterHorizontalAndVertical>
)

export const WithHeaderSuccessRounded = () => (
  <CenterHorizontalAndVertical>
    <BasicWithHeader
      rounded
      title="Officia aliquip eu ad"
      text="Dolore por fugiat cupidatat aliqua dolore incididunt. Cillum incididunt cupidatat dolor dolor Lorem duis reprehenderit ea magna duis officia. Eiusmod incididunt ipsum dolore voluptate ipsum ullamco. Tempor exercitation reprehenderit quis officia aliqua fugiat mollit adipisicing mollit exercitation ut ea laboris. Sint enim id ea eiusmod. Aute aliquip consequat labore consectetur dolore elit ut laborum."
      type="success"
    ></BasicWithHeader>
  </CenterHorizontalAndVertical>
)

export const WithHeaderDangerRoundedCentered = () => (
  <CenterHorizontalAndVertical>
    <BasicWithHeader
      rounded
      title="Officia aliquip eu ad"
      text="Dolore por fugiat cupidatat aliqua dolore incididunt. Cillum incididunt cupidatat dolor dolor Lorem duis reprehenderit ea magna duis officia. Eiusmod incididunt ipsum dolore voluptate ipsum ullamco. Tempor exercitation reprehenderit quis officia aliqua fugiat mollit adipisicing mollit exercitation ut ea laboris. Sint enim id ea eiusmod. Aute aliquip consequat labore consectetur dolore elit ut laborum."
      type="danger"
      centered={true}
    ></BasicWithHeader>
  </CenterHorizontalAndVertical>
)
