import { PersistGate } from 'redux-persist/integration/react'
import TasksList from './components/TasksList'
import { persistor } from './store'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import { useState } from 'react'

function App() {
  const [isFetching, setIsFetching] = useState(false)

  return (
    <PersistGate persistor={persistor}>
      <Router>
        <Route exact path="/">
          <Header isFetching={isFetching} setIsFetching={setIsFetching} />
        </Route>
        <Route exact path="/">
          <TasksList isFetching={isFetching} />
        </Route>
      </Router>
    </PersistGate>
  )
}

export default App
