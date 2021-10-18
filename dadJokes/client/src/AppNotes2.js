import logo from './logo.svg';
import './App.css';
import {useState} from "react";


function App() { 
  let prompt = "Enter a value:";
  let normalInput = " ";
  // [variable, function]
  // [let stateInput, function setStateInput(newValue){stateInput = newValue}]
  let [stateInput, setStateInput] = useState(" ");
  // console.log(typeof stateInput, typeof setStateInput);
  // setStateInput("testing what this does")<---this being here creates an infinite loop

  // MAKING A BUTTON
  let [buttonValue, setButtonValue] = useState(false)

  return (
    <div className="App">
      {/* normal variable */}
      <input placeholder= {prompt + "1"} id="firstInput" value={normalInput} onChange={(e)=>{console.log(e.target.value); normalInput = e.target.value}}/>
      {/* state variable */}
      <input placeholder= {prompt + "2"} id="secondInput" value={stateInput} onChange={(e)=>{console.log(e.target.value); setStateInput(e.target.value)}}/>
      <h1>{"normal:" + normalInput}</h1>
      <h1>state: {stateInput}</h1>


      <button onClick={(e)=>{setButtonValue(!buttonValue)}}>
        {buttonValue ? "Login" : "Signup"}
      </button>
      {console.log(buttonValue)}
    </div>
  );
}


export default App;

// TO DO REGISTER A USER ON MY DAD JOKES SERVER
/*
- somehow make a request to my server with new server information
  - post request. We need to use a fetch! to post information we can do this for all of CRUD
  - post new user info from input fields
    - store input field values in variable
*/ 
