import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
   const[count,setCounter]=useState(0);
  let AddValue=()=>{

   if (count<20){
    setCounter(precount=>precount+1);
        setCounter(precount=>precount+1);

   }
   
  }
  let RemValue=()=>{
    if(count>0 )
    setCounter(count - 1);  
  }
  return (
    <>
    <h1>React aur Sharon</h1>
    <h1>{count}</h1>
    <button onClick={AddValue}>Add Value</button>
    <button onClick={RemValue}>Remove Value</button>
    </>
    )
}

export default App
