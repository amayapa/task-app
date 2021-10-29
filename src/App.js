import { PersistGate } from "redux-persist/integration/react"
import TasksList from "./components/TasksList"
import { persistor } from "./store"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./components/Header"

function App() {
  return (
    <PersistGate persistor={persistor}>
      <Router>
        <Route exact path="/">
          <Header />
        </Route>
        <Route exact path="/">
          <TasksList />
        </Route>
      </Router>
    </PersistGate>
  )
}

export default App
