import styled from "styled-components"
import { colors } from "./globalStyles"

export const TaskWrapper = styled.div`
  padding: 1em 2em 1em 0.5em;
  width: 175px;
  height: 125px;
  background-color: ${colors.bgPrimary};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: solid 2px ${colors.borderColor};
  font-size: 1.5em;
  cursor: pointer;
  & p {
    color: ${({ done }) => (done ? "green" : colors.text)};
    margin: 0;
    font-weight: 500;
  }
  & p:last-child {
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
  }
`
