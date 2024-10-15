import React from 'react'

const Component1 = (props) => {
  return (
    <div>
      <h3>My Component1 called...</h3>
      <h4>Name is --- {props.name}</h4>
      <Component2 name={props.name}/>
    </div>
  )
}
const Component2 = (props)=>{
    return (
        <div>
          <h3>My Component2 called...</h3>
            <Component3 name={props.name}/>

        </div>
      )
}
const Component3 = (props)=>{
    return (
        <div>
          <h3>My Component3 called...</h3>
            <Component4 name={props.name}/>

        </div>
      )
}
const Component4 = (props)=>{
    return (
        <div>
          <h3>My Component4 called...</h3>
            <h4>Final name is -- {props.name}</h4>
        </div>
      )
}
export default Component1
