import * as actions from "./constants-actions"
import axios from "axios"

const setTasks = (quantity) => async (dispatch) => {
  const { data } = await axios.get(
    `http://localhost:3000/tasks?quantity=${quantity}`,
  )

  dispatch({
    type: actions.SET_TASKS,
    payload: data.tasks,
  })
}
const updateTask = (taskId) => async (dispatch) => {
  const response = await axios.put(
    `http://localhost:3000/tasks?taskId=${taskId}`,
  )
  if (response.status === 200) {
    dispatch({
      type: actions.UPDATE_TASKS,
      payload: taskId,
    })
  } else {
    return
  }
}

export { setTasks, updateTask }
