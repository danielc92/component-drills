import React from "react"
import styled from "styled-components"

const Folder = styled.div`
  padding-left: 16px;
  border-left: 2px solid #1d66d2;
`

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 10px 0;
`

const Desc = styled.p`
  font-size: 14px;
  color: #3c3c3c;
  margin: 0 0 10px 0;
`

const FileSystemComponent: React.FC<IFileSystem> = ({
  folderDescription,
  folderName,
  subFolders,
}) => {
  return (
    <Folder>
      <Title>{folderName}</Title>
      <Desc>{folderDescription}</Desc>
      {subFolders &&
        subFolders.map((value: IFileSystem) => (
          <FileSystemComponent {...value} />
        ))}
    </Folder>
  )
}

export default FileSystemComponent
