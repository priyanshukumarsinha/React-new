
import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null);
  const [copyBtnClr, setCopyBtnClr] = useState('#1d43d8')
  const [copyBtnText, setCopyBtnText] = useState('Copy');

  const copyPassToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password);
    setCopyBtnClr('#7999c8')
    setCopyBtnText('Copied to Clipboard')
  },[password])

  const passwordGenerator = useCallback(() => {
    let pswd = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "123456789"
    if (characterAllowed) str += "~!@#$%^&*()_+="

    for (let i = 0; i < length; i++) {
      let char = Math.round(Math.random()*str.length)
      pswd += str.charAt(char)
    }

    setPassword(pswd)


  }, [length, numberAllowed, characterAllowed, setPassword])
  
  useEffect(()=>{
    passwordGenerator();
    setCopyBtnClr('#1d43d8')
    setCopyBtnText('Copy')
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />

          <button 
          onClick={copyPassToClipboard}
          id= "copyBtn"
          className='bg-blue-700 text-white px-3 py-2 outline-none shrink-0'
          style={{backgroundColor: copyBtnClr}}
          >{copyBtnText}</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label >Length : {length}</label>
          </div>
          <div className="flex gap-x-2 outline-none">
            <input 
              type="checkbox" 
              defaultChecked = {numberAllowed}
              id='numberInput'
              onChange={()=>{setNumberAllowed((prev)=>!prev)}}
            />
            <label htmlFor='numberInput'>Numbers</label>

            <input 
              type="checkbox" 
              defaultChecked = {characterAllowed}
              id='characterInput'
              onChange={()=>{setCharAllowed((prev)=>!prev)}}
            />
            <label htmlFor='characterInput'>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
