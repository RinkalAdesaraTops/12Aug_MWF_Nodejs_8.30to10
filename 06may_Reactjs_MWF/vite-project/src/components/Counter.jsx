import React, { useMemo } from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);
    const [name,setName]= useState([])
    const data = useMemo(()=>myFunction(count),[count])
    const addCount = ()=>{
        console.log('counter is called..');        
        setCount(count+1)
    }
    const addText = ()=>{
        console.log("text added");      
        setName([
            ...name,"text added.."
        ])
    }
  return (
    <div>
      <h3>Count is :{count}</h3>
      <button onClick={addCount}>Add Count</button>
        <button onClick={addText}>Add Text</button>
      <ul>
        {
            name && name.map((i)=>{
                return <li>{i}</li>
            })
        }
      </ul>
      <h3>Data is : {data}</h3>
    </div>
  )
}
const myFunction = (n)=>{
    console.log('function called...');   
    for(let i=0;i<1000;i++){
        n += 1;
    }
    return n;
}

export default Counter
