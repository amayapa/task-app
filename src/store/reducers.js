import { persistCombineReducers } from "redux-persist"
import TasksReducer from "./tasks.reducer"
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "root",
  storage: storage,
}

export default persistCombineReducers(persistConfig, {
  tasksReducer: TasksReducer,
})
