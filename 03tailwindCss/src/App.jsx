import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-600 text-black rounded-xl p-4 mb-3'>hello world</h1>
      <Card username="chaiaurcode" btnText="click me"/>
      <Card username="shailesh" btnText="visit me"/>
    </>
  )
}

export default App
