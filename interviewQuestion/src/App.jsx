import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(1)
  const [multipliedValue, setMultipliedValue] = useState(1)
  const multiplyBy5 = () => {
    setValue(value+1)
    setMultipliedValue(value*5)
  }

  return (
    <>
      <h1>Main Value : {value}</h1>
      <button
      onClick={multiplyBy5}
      >Click to Multiply by 5</button>
      <h2>Multiplied Value :{multipliedValue}</h2>
    </>
  )
}

export default App
