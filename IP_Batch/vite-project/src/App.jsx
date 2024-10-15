import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { ADD, MINUS } from './action/UserAction'
import { decrement, increment } from './redux/CounterReducers'

function App() {
  const count = useSelector((state)=>state.counter.count)
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <h3>Redux Example</h3>
        <h4>Counter is -- {count}</h4>
        <button onClick={()=>dispatch(increment())}>Add</button>
        <button onClick={()=>dispatch(decrement())}>Minus</button>
      </div>
    </>
  )
}

export default App
