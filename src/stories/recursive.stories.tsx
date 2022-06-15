import React from "react"
import FileSystemComponent from "components/recursive/FileSystem"

export default {
  title: "Recursive",
}

const data: IFileSystem = {
  folderName: "My file system",
  folderDescription: "Root",
  subFolders: [
    {
      folderName: "Images",
      folderDescription: "Some images",
      subFolders: [
        {
          folderName: "Spaceships",
          folderDescription: "Images of Spaceships",
          subFolders: [],
        },
        {
          folderName: "Apples",
          folderDescription: "Images of Apples",
          subFolders: [
            {
              folderName: "Granny smith",
              folderDescription: "My favourite type of apple!",
              subFolders: [],
            },
          ],
        },
        {
          folderName: "Flowers",
          folderDescription: "Images of Flowers",
          subFolders: [
            {
              folderName: "Rose",
              folderDescription: "Roses from the fields of italy",
              subFolders: [],
            },
            {
              folderName: "Tulips",
              folderDescription: "Tulips from the fields of italy",
              subFolders: [
                {
                  folderName: "Nancy's tulips",
                  folderDescription: "Tulip photos taken by Nancy",
                  subFolders: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
export const RecursiveFileSystemExample = () => (
  <FileSystemComponent {...data} />
)
