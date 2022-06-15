interface MediumCarouselItem {
  text: string
  authorUrl: string
  authorName: string
}

type ArrayTwoOrMore<T> = {
  0: T
  1: T
} & Array<T>
interface IAccessibleTab {
  buttonText: string
  buttonId: string
  tabPanelId: string
  panelContent: string
}
interface IAccessibleTabProps {
  tabs: ArrayTwoOrMore<IAccessibleTab>
  tabsDescription: string
}

interface IFileSystem {
  folderName: string
  folderDescription: string
  subFolders: Array<IFileSystem>
}

interface IChineseWhispers {
  personName: string
  whatTheyHeard: string
  whisperedTo: Array<[]>
}
