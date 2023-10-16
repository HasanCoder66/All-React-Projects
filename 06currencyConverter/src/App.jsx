import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

import './App.css'

function App() {
  
  const [amount , setAmount] =useState(0)
  const [from , setForm] =useState("usd")
  const [to  , setTo] =useState("inr")
  const [convertedAmount , setConvertedAmount] =useState(0)

  const currenInfo = useCurrencyInfo(from)

  const options = Object.keys(currenInfo)

  const swap = () => {
    setTo(form)
    setForm(to)
    setConvertedAmount(amount)
    setAmount(convertedAmount)


    const convert = () => {
      setConvertedAmount(amount * currenInfo[to])
    }
  }
  return (
    <>
    <h1 className='bg-orange-800 text-white'>
      Currency Convertor App
    </h1>
    </>
  )
}

export default App
