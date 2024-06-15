import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    let [counter,setCounter] = useState(15)

    // let counter =0;

    /*
    function addvalue()
    {
      // console.log(counter);
      counter=counter+1;
      console.log(counter);
    }
      */

    let addvalue =() =>{
      // counter = counter+1;
      // console.log(counter);
      if(counter!=20)
        {
          counter= counter+1;
        }
      setCounter(counter);
    }
    let removevalue =() =>{
      if(counter!=0)
        {
          counter = counter-1;
        }
      setCounter(counter);
    }
    
  return (
    < >
        <h1>This is hooks Concept</h1>

        <h2>Counter value : {counter}</h2>

        <button onClick={addvalue}>Add</button>
        <br />
        <br />
        <br />
        <button onClick={removevalue}>Remove</button>

    </>
  );
}

export default App;
