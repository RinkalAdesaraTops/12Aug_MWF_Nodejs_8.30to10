import React, { useState } from 'react'

const SecondComponent = (props) => {
    //useState hooks 
    const [count,setCount] = useState(0)
    const [name,setName] = useState("Abc")
    const addData = ()=>{
        setCount(count+1)
    }
  return (
    <div>
      <h3>My Second Component</h3>
      <h4>Count is -- {count}</h4>
      <button onClick={addData}>Add</button>
      <h4>Name is -- {name}</h4>
      <button onClick={()=>setName("Testinggg")}>Add</button>
      <h2>My Name is -- {props.myname}</h2>
      <h2>My AGe is -- {props.myage}</h2>

    </div>
  )
}

export default SecondComponent
