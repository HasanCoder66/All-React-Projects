import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(5)
  

  const addValueHandler = () => {
   
      setCount(count + 1)
    
    
  }

  const removeValueHandler = () => {
    
      setCount(count - 1)
  }
  return (
    <>
     <h1>Counter Project</h1>
     <h2> Counter Value : {count}</h2>
     <button onClick={addValueHandler}> Add Value {count}</button>
     <button onClick={removeValueHandler} >Remove Value {count}</button>
    </>
  )
}

export default App
