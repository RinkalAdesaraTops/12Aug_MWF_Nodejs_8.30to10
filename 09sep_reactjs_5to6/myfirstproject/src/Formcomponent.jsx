import React, { useState } from 'react'

const Formcomponent = () => {
    const [name,setName] = useState("")
  return (
    <div>
      <h3>Form</h3>
      <input type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)} />
      <h4>Name is : {name}</h4>
    </div>
  )
}

export default Formcomponent
