import styled from 'styled-components'
import { Button, colors, devices, inputCommonStyles } from './globalStyles'

export const HeaderWrapper = styled.header`
  background-color: #e9e9e9;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  & > div {
    margin: 0 auto;
    padding: 1em 2em;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
  }
  @media ${devices.mobileL} {
    & > div {
      flex-direction: row;
      height: 100px;
    }
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
  color: ${({ disabled }) => (disabled ? colors.disabled : colors.text)};
  & input {
    ${inputCommonStyles}
    width: 70px;
    margin-right: 1em;
    text-align: center;
    padding: 0;
    padding-inline: 10px;
    border-radius: 5px;
  }
`
export const RequestButton = styled(Button)`
  color: ${({ disabled }) => (disabled ? colors.disabled : colors.text)};
`
