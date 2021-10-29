import React, { useEffect } from "react"
import PropTypes from "prop-types"
import {
  Actions,
  Overlay,
  TaskDetailsWrapper,
} from "../styles/TaskDetailsWrapper.styles.js"
import { Button } from "../styles/header.styles.js"
import { updateTask } from "../store/tasks.actions.js"
import { useDispatch } from "react-redux"

const TaskDetails = (props) => {
  const dispatch = useDispatch()
  const { id, title, status, isModalOpen, setTaskToDetail, setIsModalOpen } =
    props

  useEffect(() => {
    document.addEventListener("keydown", closeModal, false)
    return () => {
      document.removeEventListener("keydown", closeModal, false)
    }
    //eslint-disable-next-line
  }, [])

  const closeModal = () => {
    setTaskToDetail({})
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <TaskDetailsWrapper
        open={isModalOpen}
        done={status === "COMPLETED" && true}
      >
        <p>
          <span>Task #{id}</span> - <span>{title}</span>
        </p>
        <Actions>
          <Button onClick={() => dispatch(updateTask(id))}>Complete</Button>
          <Button onClick={closeModal}>Close</Button>
        </Actions>
      </TaskDetailsWrapper>
      <Overlay open={isModalOpen} onClick={closeModal} />
    </>
  )
}

TaskDetails.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  setTaskToDetail: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
}

export default TaskDetails
