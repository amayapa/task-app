import { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import {
  Spinner,
  TasksListWrapper,
  Title,
} from '../styles/tasks-list.styles.js'
import Task from './Task.js'
import TaskDetails from './TaskDetails.js'

const TasksList = (props) => {
  const { tasks } = useSelector((state) => state.tasksReducer)
  const { isFetching } = props

  const [taskToDetail, setTaskToDetail] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div style={{ position: 'relative' }}>
      <Title>Task List</Title>
      {isFetching ? (
        <Spinner />
      ) : (
        <TasksListWrapper>
          {tasks.map(({ id, title, status }) => (
            <Task
              key={id}
              id={id}
              title={title}
              status={status}
              setTaskToDetail={setTaskToDetail}
              setIsModalOpen={setIsModalOpen}
            />
          ))}
        </TasksListWrapper>
      )}
      {isModalOpen && (
        <TaskDetails
          id={taskToDetail.id}
          title={taskToDetail.title}
          status={taskToDetail.status}
          isModalOpen={isModalOpen}
          setTaskToDetail={setTaskToDetail}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  )
}

TasksList.propTypes = {
  isFetching: PropTypes.bool.isRequired,
}

export default TasksList
