import React, { memo } from 'react'
import { useState } from 'react'

const funccount = new Set();
const CounterDemo = () => {
    const [count, setCount] = useState(0)
  const [number, setNumber] = useState(0)
 
  const incrementCounter = () => {
    console.log('increment called..');
    
    setCount(count + 1)
  }
  const decrementCounter = () => {
    console.log('decrement called..');

    setCount(count - 1)
  }
   
   const incrementNumber = () => {
    console.log('increment No called..');

    setNumber(number + 1)
  }
   
funccount.add(incrementCounter);
funccount.add(decrementCounter);
funccount.add(incrementNumber);
alert(funccount.size);
  return (
    <div>
      <div>
      Count: {count}
      <button onClick={incrementCounter}>
        Increase counter
      </button>
      <button onClick={decrementCounter}>
         Decrease Counter
      </button>
      <button onClick={incrementNumber}>
        increase number
      </button>
    </div>
    </div>
  )
}

export default memo(CounterDemo)
