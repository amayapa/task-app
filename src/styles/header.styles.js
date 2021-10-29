import styled, { css } from "styled-components"
import { colors, devices } from "./globalStyles"

const commonStyles = css`
  height: 35px;
  outline: none;
  border-radius: 5px;
  font-weight: 800;
  border: solid 2px ${colors.borderColor};
  color: ${colors.text};
`

export const HeaderWrapper = styled.header`
  padding: 1em 2em;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #c3c3c340;
  @media ${devices.mobileL} {
    flex-direction: row;
  }
`
export const Logo = styled.div`
  height: 50px;
  & img {
    height: 100%;
    width: auto;
  }
  @media ${devices.mobileL} {
    margin-top: -15px;
  }
`
export const TasksFetcher = styled.form`
  padding: 0.5em;
  & input {
    width: 50px;
    margin-right: 1em;
    text-align: center;
    padding: 0;
    padding-inline: 10px;
    border-radius: 5px;
    ${commonStyles}
  }
`
export const Button = styled.button`
  ${commonStyles}
  padding: 5px;
  padding-inline: 10px;
  background-color: ${colors.bgSecondary};
  cursor: pointer;
  &:hover {
    background-color: ${colors.bgPrimary};
  }
`
