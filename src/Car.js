import { useState } from "react";


function Car(){
    let [counter,setCounter]= useState(0);
    
    function addval()
    {
        counter = counter + 1
        setCounter(counter)
    }

    function delete_val(){
        counter = counter - 1
        setCounter(counter)
    }
    
    return(
        <>
            <h1> This is my new component </h1>

            <h2>This is new program to Add and Delete value </h2>

            <h3> The initial value is : {counter}</h3>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    

            <button onClick={delete_val}>Delete</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 


            <button onClick={addval}>Add</button>  
            
             

        </>
    )
}

export default Car;