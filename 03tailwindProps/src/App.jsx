import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4 mb-4'>Tailwind CSS</h1>
      <Card username = "Priyanshu" btnText = "Visit my Github"/>
      <Card username = "Priyanshu" />
    </>
  )
}

export default App
