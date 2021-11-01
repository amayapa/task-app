import styled from 'styled-components'
import { colors, devices } from './globalStyles'

export const TasksWrapper = styled.section`
  margin-top: 150px;
  position: relative;
  padding-top: 1em;
  @media ${devices.mobileL} {
    margin-top: 100px;
  }
`

export const Title = styled.h2`
  text-align: center;
  margin: 0;
  color: ${colors.text};
  text-transform: uppercase;
  @media ${devices.tablet} {
    font-size: 2.5em;
  }
`

export const TasksListContent = styled.section`
  display: grid;
  place-items: center;
  gap: 1em;
  grid-template-columns: 100%;
  padding: 2em;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  @media ${devices.mobileL} {
    grid-template-columns: 49% 49%;
    column-gap: 2%;
  }
  @media ${devices.tablet} {
    grid-template-columns: 33.3% 33.3% 33.3%;
    column-gap: 0;
  }
  @media ${devices.laptop} {
    grid-template-columns: 25% 25% 25% 25%;
  }
`
export const Spinner = styled.div`
  border: 7px solid rgb(0, 0, 0, 0.1);
  width: 80px;
  height: 80px;
  top: calc(50% - 40px);
  left: calc(50% - 40px);
  margin-top: 10em;
  border-radius: 50%;
  border-left-color: ${colors.completed};
  animation: spin 1s cubic-bezier(1, 1.33, 0.59, -0.33) infinite;
  -webkit-animation: spin 1s cubic-bezier(1, 1.33, 0.59, -0.33) infinite;
  position: absolute;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
