import { useState } from 'react'
import './App.css'
import { Productos } from './Componentes/Productos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Productos/>
    </>
  )
}

export default App
