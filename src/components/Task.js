import React from "react"
import PropTypes from "prop-types"
import { TaskWrapper } from "../styles/TaskWrapper.styles.js"

const Task = (props) => {
  const { id, title, status, setTaskToDetail, isModalOpen, setIsModalOpen } =
    props

  const handleModal = () => {
    setTaskToDetail({ id, title, status })
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <TaskWrapper onClick={handleModal} done={status === "COMPLETED" && true}>
        <p id="id">Task #{id}</p>
        <p id="title">{title}</p>
      </TaskWrapper>
    </>
  )
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
}

export default Task
