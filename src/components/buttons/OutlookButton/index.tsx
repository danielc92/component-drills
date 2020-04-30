import styled from "styled-components"

const OutlookButton = styled.button`
  outline: none;
  padding: 16px 24px;
  border: none;
  border-radius: 4px;
  background: ${props => (props.hollow ? "#ffffff" : "#0078d4")};
  color: ${props => (!props.hollow ? "#ffffff" : "#0078d4")};
  font-weight: bold;
  box-shadow: 0 7px 38px 0 rgba(0, 0, 0, 0.31), inset 0 0 0 1px #0078d4;
  transition: all 0.25s ease-in;

  :hover {
    background: ${props => (props.hollow ? "#ffffff" : "#1EA7FD")};
    box-shadow: 0 7px 38px 0 rgba(0, 0, 0, 0.31),
      inset 0 0 0 1px ${props => (!props.hollow ? "#1ea7fd" : "#0078d4")};
  }
`

export default OutlookButton
