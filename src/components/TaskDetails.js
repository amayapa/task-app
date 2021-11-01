import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Actions,
  CompleteButton,
  Overlay,
  TaskDetailsWrapper,
  Button,
} from '../styles/TaskDetailsWrapper.styles.js'
import { setTasks, updateTask } from '../store/tasks.actions.js'
import { useDispatch } from 'react-redux'
import { setTaskAsCompleted } from '../api/tasks.js'
import { colors } from '../styles/globalStyles.js'
import Swal from 'sweetalert2'

const TaskDetails = (props) => {
  const dispatch = useDispatch()
  const { id, title, status, isModalOpen, setTaskToDetail, setIsModalOpen } =
    props
  const isCompletedTask = status === 'COMPLETED'

  useEffect(() => {
    document.addEventListener('keydown', closeModal, false)
    return () => {
      document.removeEventListener('keydown', closeModal, false)
    }
    //eslint-disable-next-line
  }, [])

  const closeModal = () => {
    setTaskToDetail({})
    setIsModalOpen(!isModalOpen)
  }

  const completeTask = async () => {
    try {
      const response = await setTaskAsCompleted(id)
      if (response.status === 200) {
        dispatch(updateTask(response.data.task.id))
        closeModal()
      }
    } catch (error) {
      if (error.response?.status === 404) {
        dispatch(setTasks([]))
        Swal.fire({
          icon: 'error',
          text: `${error.response.data.message}\nRequest new ones`,
          confirmButtonColor: colors.bgPrimary,
        }).then(() => closeModal())
      } else {
        Swal.fire({
          icon: 'error',
          text: error,
          confirmButtonColor: colors.bgPrimary,
        }).then(() => closeModal())
      }
    }
  }

  return (
    <>
      <TaskDetailsWrapper open={isModalOpen} done={isCompletedTask}>
        <p>
          <span>Task #{id}</span> - <span>{title}</span>
        </p>
        <Actions>
          <CompleteButton disabled={isCompletedTask} onClick={completeTask}>
            {isCompletedTask ? 'Completed' : 'Complete'}
          </CompleteButton>
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
  status: PropTypes.string.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  setTaskToDetail: PropTypes.func.isRequired,
}

export default TaskDetails
