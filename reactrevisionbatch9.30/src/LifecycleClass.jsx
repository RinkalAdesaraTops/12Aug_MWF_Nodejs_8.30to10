import React, { Component } from 'react'

class LifecycleClass extends Component {
    constructor(){
        super()
        console.log("constructor called");
        this.state = {
            name:"Rinkal"
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                name:"Test"
            })
        },5000)
        
        console.log('component did mount called');
    }
    static getDerivedStateFromProps(state,props){
        console.log('getDerivedStateFromProps called..');

        return state
    }
    shouldComponentUpdate(){
        console.log('should component update called..');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('getSnapshot before update called..');
        console.log(prevState);
        return prevState
    }
    componentDidUpdate(){
        console.log('component did update called..');
    }
    componentWillUnmount(){
        console.log('component will unmount called..');
    }
  render() {
    console.log("render called");

    return (
      <div>
        <h3>Name is  :{this.state.name}</h3>
      </div>
    )
  }
}
export default LifecycleClass;