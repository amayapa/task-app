import { useState } from "react"
import { useSelector } from "react-redux"
import { TasksListWrapper, Title } from "../styles/tasks-list.styles.js"
import Task from "./Task.js"
import TaskDetails from "./TaskDetails.js"

const TasksList = () => {
  const { tasks } = useSelector((state) => state.tasksReducer)
  const [taskToDetail, setTaskToDetail] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Title>Task List</Title>
      <TasksListWrapper>
        {tasks.map(({ id, title, status }) => {
          return (
            <Task
              key={id}
              id={id}
              title={title}
              status={status}
              setTaskToDetail={setTaskToDetail}
              setIsModalOpen={setIsModalOpen}
            />
          )
        })}
      </TasksListWrapper>
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
    </>
  )
}

export default TasksList
