import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decreaseCount, getUsers, increaseCount } from './redux/actions/actionCreator';

const App = () => {
  const count = useSelector(store => store.counter.count)
  const dispatch = useDispatch()

  const handleIncrease = () => {
    dispatch(increaseCount())
  }

  const handleDecrease = () => {
    dispatch(decreaseCount())
  }

  const handleUsers = () => {
    dispatch(getUsers())
  }

  return(
  <div>
    <button onClick={handleIncrease}>+1</button>
    <button onClick={handleDecrease}>-1</button>
    <button onClick={handleUsers}>Get Users</button>
    <h1>{count}</h1>
  </div>)
}

export default App;
