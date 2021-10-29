import styled, { css } from "styled-components"
import { colors } from "./globalStyles"

const activeOverlay = css`
  position: fixed;
  opacity: 1;
  transition: all 0.5s ease-in-out;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.487);
  pointer-events: all;
`

const inactiveOverlay = css`
  transition: all 0.5s ease-in-out;
  pointer-events: none;
  opacity: 1;
`

export const TaskDetailsWrapper = styled.div`
  width: 90%;
  min-height: 150px;
  max-width: 500px;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transition: all 0.5s ease-in-out;
  box-shadow: none;
  z-index: 1;
  background-color: white;
  border-radius: 10px;
  padding: 0.5em;
  padding-left: 1em;
  display: ${({ open }) => (open ? "initial" : "none")};
  transform: translate(-50%, -50%) scale(${({ open }) => (open ? 1 : 0)});
  border: solid 2px ${colors.borderColor};
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
  & p {
    margin: 0;
    color: ${({ done }) => (done ? "green" : colors.text)};
    font-size: 1.5em;
    font-weight: 500;
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5em;
  position: absolute;
  bottom: 5px;
  right: 5px;
`

export const Overlay = styled.div`
  ${({ open }) => (open ? activeOverlay : inactiveOverlay)}
`
