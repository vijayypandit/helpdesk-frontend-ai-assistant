import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Button } from "./components/ui/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Thisi is my aplication</h1>
      <Button variant={"destructive"}>CLick Me</Button>
    </>
  )
}

export default App
