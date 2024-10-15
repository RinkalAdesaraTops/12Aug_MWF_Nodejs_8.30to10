import React, { createContext, useContext } from 'react'
const Username = createContext()
const ContextExample = (props) => {
  return (
    <div>
      <h3>My Component1 called...</h3>
      <h4>Name is --- {props.name}</h4>
      <Username.Provider value={props.name}>
            <Component2 />   
      </Username.Provider>
      
    </div>
  )
}
const Component2 = ()=>{
    return (
        <div>
          <h3>My Component2 called...</h3>
            <Component3 />

        </div>
      )
}
const Component3 = ()=>{
    return (
        <div>
          <h3>My Component3 called...</h3>
            <Component4 />

        </div>
      )
}
const Component4 = ()=>{
    let nm = useContext(Username)
    return (
        <div>
          <h3>My Component4 called...</h3>
            <h4>Final name is -- {nm}</h4>
        </div>
      )
}
export default ContextExample
