import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cards from './assets/componentes/Cards'
import './App.css'
import Youtube from './assets/componentes/youtube/youtube'  

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Cards/>
      <Youtube/>
      <h1>Vite + React</h1>
   
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      
    </>
  )
}

export default App
