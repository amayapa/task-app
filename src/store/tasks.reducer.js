import * as actions from "./constants-actions"

const initialState = {
  tasks: [],
}

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_TASKS:
      return {
        tasks: action.payload,
      }
    case actions.UPDATE_TASKS:
      const taskId = action.payload
      let taskToComplete = state.tasks.find((task) => task.id === taskId)
      taskToComplete.status = "COMPLETED"
      return {
        tasks: [...state.tasks],
      }
    default:
      return state
  }
}
