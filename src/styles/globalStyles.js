import styled, { css } from 'styled-components'

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

const devices = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
}

const colors = {
  bgPrimary: '#b9d9f5',
  bgSecondary: '#74ACDF',
  text: '#333333',
  borderColor: '#c3c3c3',
  shadows: '2px 2px 1px #3c3c3c',
  disabledShadow: '2px 2px 2px #',
  disabled: '#c3c3c3',
  completed: 'green',
}

export const inputCommonStyles = css`
  height: 35px;
  outline: none;
  border-radius: 5px;
  font-weight: 800;
  border: solid 2px ${colors.borderColor};
  color: inherit;
`

export const Button = styled.button`
  ${inputCommonStyles}
  padding: 5px;
  padding-inline: 10px;
  background-color: ${colors.bgSecondary};
  cursor: ${({ disabled }) => (disabled ? 'initial' : 'pointer')};
  color: ${colors.text};
  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? colors.bgSecondary : colors.bgPrimary};
  }
`

export { devices, colors }
