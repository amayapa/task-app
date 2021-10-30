import * as actions from './constants-actions'

const setTasks = (tasks) => (dispatch) => {
  dispatch({
    type: actions.SET_TASKS,
    payload: tasks,
  })
}

const updateTask = (taskId) => (dispatch) => {
  dispatch({
    type: actions.UPDATE_TASKS,
    payload: taskId,
  })
}

export { setTasks, updateTask }
