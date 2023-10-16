import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
const myObj = {
  name : "hasan", 
  email : "codermhasan",
  pass : "coderhasan"
}

const arr = [1,2,34]
  return (
    <>
      <h1 className='bg-green-400 rounded-xl p-4 mb-10'>
        Hasan Ashraf
      </h1>
       <Card username="sarah" btnText={"click me"}/>
       <Card username="amy"  btnext={"visit me"} />
    </>
  )
}

export default App
