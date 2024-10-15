import { lazy, Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component1 from './components/Component1'
import Counter from './components/Counter'
import CounterDemo from './components/CounterDemo'
import Hookexample from './components/Hookexample'
// import Apicomponent from './components/Apicomponent'
import mystyle from '../src/Mystyle.module.css'
import { useDispatch, useSelector } from 'react-redux'
const Homedemo = lazy(()=>import('./components/Homedemo'))
const Contact = lazy(()=>import('./components/Contact'))
const Apicomponent = lazy(()=>import('./components/Apicomponent'))
import {add,minus,changeColor} from './redux/action'
import { decrement, increment } from './reduxtoolkit/CounterReducer'
// import Homedemo from './components/Homedemo'
// import Contact from './components/Contact'

function App() {
 const count = useSelector((state)=>state.Counter.count) 
 const color = useSelector((state)=>state.color)
 const dispatch = useDispatch()
  return (
    <>   
    <h3>Redux Demo</h3>
    <h4>Counter is : {count}</h4>
    <button onClick={()=>dispatch(increment())}>Add</button>
    <button onClick={()=>dispatch(decrement())}>Minus</button>
    </>
  )
}

export default App
