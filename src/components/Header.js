import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import logo from '../task-app-logo.png'
import {
  Logo,
  HeaderWrapper,
  TasksFetcher,
  RequestButton,
} from '../styles/header.styles.js'
import { useDispatch } from 'react-redux'
import { setTasks } from '../store/tasks.actions'
import { useSelector } from 'react-redux'
import { getTasks } from '../api/tasks'
import Swal from 'sweetalert2'
import { colors } from '../styles/globalStyles'

const Header = (props) => {
  const dispatch = useDispatch()

  const { tasks } = useSelector((state) => state.tasksReducer)
  const { setIsFetching } = props

  const [quantity, setQuantity] = useState(3)
  const [unableToRequest, setUnableToRequest] = useState(true)

  const checkUncompletedTasks = () => {
    const uncompletedTask = tasks.find(({ status }) => status === 'PENDING')
    if (!uncompletedTask) {
      setUnableToRequest(false)
    }
  }

  useEffect(() => {
    checkUncompletedTasks()
    //eslint-disable-next-line
  }, [tasks])

  const requestTasks = async (event) => {
    event.preventDefault()
    if (unableToRequest) {
      Swal.fire({
        icon: 'warning',
        text: 'Please complete all tasks before request new ones!',
        confirmButtonColor: colors.bgPrimary,
      })
    } else if (quantity === '0') {
      Swal.fire({
        icon: 'warning',
        text: 'Request at least one task 😉',
        confirmButtonColor: colors.bgPrimary,
      })
      setQuantity(1)
    } else {
      setIsFetching(true)
      try {
        const { data } = await getTasks(quantity)
        dispatch(setTasks(data.tasks))
        setUnableToRequest(true)
        setTimeout(() => {
          setIsFetching(false)
        }, 700)
      } catch (error) {
        throw error
      }
    }
  }

  return (
    <HeaderWrapper>
      <div>
        <Logo>
          <img src={logo} alt="Tasks App Logo" />
        </Logo>
        <TasksFetcher disabled={unableToRequest}>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            disabled={unableToRequest}
            min={1}
          />
          <RequestButton onClick={requestTasks}>Get Tasks</RequestButton>
        </TasksFetcher>
      </div>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  setIsFetching: PropTypes.func.isRequired,
}

export default Header
