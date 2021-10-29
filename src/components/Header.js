import React, { useState } from "react"
import logo from "../task-app-logo.png"
import {
  Logo,
  HeaderWrapper,
  TasksFetcher,
  Button,
} from "../styles/header.styles.js"
import { useDispatch } from "react-redux"
import { setTasks } from "../store/tasks.actions"

const Header = () => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(3)

  const handleChange = (event) => {
    event.preventDefault()
    dispatch(setTasks(quantity))
  }

  return (
    <HeaderWrapper>
      <Logo>
        <img src={logo} alt="Tasks App Logo" />
      </Logo>
      <TasksFetcher>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <Button onClick={handleChange}>Get Tasks</Button>
      </TasksFetcher>
    </HeaderWrapper>
  )
}

export default Header
