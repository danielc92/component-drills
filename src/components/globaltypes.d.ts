interface MediumCarouselItem {
  text: string
  authorUrl: string
  authorName: string
}


interface IAccessibleTab {
  buttonText: string
  buttonId: string
  panelContent: string
}
interface IAccessibleTabProps {
  tabs: Array<IAccessibleTab>
}