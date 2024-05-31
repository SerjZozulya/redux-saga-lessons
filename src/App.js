import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decreaseCount, increaseCount } from './redux/actions/actionCreator';

const App = () => {
  const count = useSelector(store => store.counter.count)
  const dispatch = useDispatch()

  const handleIncrease = () => {
    dispatch(increaseCount())
  }

  const handleDecrease = () => {
    dispatch(decreaseCount())
  }

  return(
  <div>
    <button onClick={handleIncrease}>+1</button>
    <button onClick={handleDecrease}>-1</button>
    <h1>{count}</h1>
  </div>)
}

export default App;
