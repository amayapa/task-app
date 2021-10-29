import styled from "styled-components"
import { colors, devices } from "./globalStyles"

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 0;
  color: ${colors.text};
`

export const TasksListWrapper = styled.section`
  display: grid;
  place-items: center;
  gap: 1em;
  grid-template-columns: 100%;
  padding: 2em;
  @media ${devices.mobileL} {
    grid-template-columns: 49% 49%;
    column-gap: 2%;
  }
  @media ${devices.tablet} {
    grid-template-columns: 33.3% 33.3% 33.3%;
    column-gap: 0;
  }
`
export const Spinner = styled.div`
  border: 7px solid rgb(0, 0, 0, 0.1);
  width: 80px;
  height: 80px;
  margin: auto;
  margin-top: 160px;
  border-radius: 50%;
  border-left-color: ${colors.brown};
  animation: spin 1s cubic-bezier(0.42, 0.18, 0.33, 0.71) infinite;
`
