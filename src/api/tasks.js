import axios from 'axios'

// Use this to switch service bettween local and the docker container
const serviceIsRunningInDockerContainer = false

const API_PORT = serviceIsRunningInDockerContainer ? '9000' : '3000'

export const getTasks = async (quantity) =>
  axios.get(`http://localhost:${API_PORT}/tasks?quantity=${quantity}`)

export const setTaskAsCompleted = async (taskId) =>
  axios.put(`http://localhost:${API_PORT}/tasks?taskId=${taskId}`)
