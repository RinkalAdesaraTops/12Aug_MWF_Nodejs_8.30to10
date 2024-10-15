import logo from './logo.svg';
import './App.css';
import Firstcomponent from './Firstcomponent';
import SecondComponent from './SecondComponent';
import Formcomponent from './Formcomponent';

function App() {
  const name="abc"
  let arr = [10,20,30,40,50]
  let mystyle = {
    color:"blue"
  }
  return (
        <div>
          <h3 style={{color:"red",backgroundColor:"yellow"}}>My First Component</h3>
          <h4 style={mystyle}>Name is -- {name}</h4>
          <h4 className='App'>Addition is -- {3+6}</h4>
          <ul>
            {
              arr.map((i)=> <li>{i}</li>)
            }
          </ul>
          {/* <Firstcomponent /> */}
          {/* <SecondComponent myname="Rinkal" myage="29"/> */}
          <Formcomponent />
        </div>
  );
}

export default App;
