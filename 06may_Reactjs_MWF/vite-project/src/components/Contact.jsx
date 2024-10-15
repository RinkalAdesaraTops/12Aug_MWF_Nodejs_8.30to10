import React, { useState } from 'react'

const Contact = () => {
    let [count,setCount] = useState(0)
    for(let i=0;i<100000000;i++){
        count +=i
    }
  return (
    <div>
      <h3>Count is -- {count}</h3>
    </div>
  )
}

export default Contact
