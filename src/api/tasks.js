import axios from 'axios'

export const getTasks = async (quantity) =>
  axios.get(`http://localhost:3000/tasks?quantity=${quantity}`)

export const setTaskAsCompleted = async (taskId) =>
  axios.put(`http://localhost:3000/tasks?taskId=${taskId}`)
