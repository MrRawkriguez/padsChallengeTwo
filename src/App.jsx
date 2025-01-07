import { useState } from "react"
import pads from './pads'
import Pad from './Pad'
import './App.css'

function App({darkMode}) {

  const [padArray, setPadArray] = useState(pads)

  const buttonElements = pads.map(pad => (
    <Pad key={pad.id} color={pad.color} on={pad.on} />
  ))

  const mainElement = {
    backgroundColor: darkMode ? "#222222" : "#cccccc",
    color: darkMode ? "#cccccc" : "#222222",
    height: "100vh",
  }

  return (
    <main style={mainElement}>
      <div className='pad-container'>
        {buttonElements /* Rendering to the browser */}
      </div>
    </main>
  )
}

export default App
