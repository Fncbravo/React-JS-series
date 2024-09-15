import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = 
    "ABCDEFGHIJKLMNOPURSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  }, [length, numAllowed, charAllowed, setPassword])

  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App
