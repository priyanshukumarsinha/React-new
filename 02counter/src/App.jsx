import { useState } from 'react';
import './App.css'

function App() {
  let [count, setCounter] = useState(0);

  const addValue = () => {
    setCounter(++count);
    // console.log("Clicked", count);
  }

  const removeValue = () => {
    setCounter(--count)
  }

  return (
    <>
      <h1>React Project : Counter</h1>
      <h2>Count : {count}</h2>
      <button
        onClick={addValue}
      >Add Value</button>
      <button
        onClick={removeValue}
        >Remove Value</button>
    </>
  )
}

export default App
