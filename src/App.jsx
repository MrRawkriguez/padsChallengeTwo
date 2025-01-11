import { useState } from "react"
import pads from './pads'
import Pad from './Pad'
import './App.css'

function App({darkMode}) {

  const [padArray, setPadArray] = useState(pads)

  function toggle(id) {
      setPadArray(prevPadArray => prevPadArray.map(item =>{
        return item.id === id ? {...item, on: !item.on} : item
      }))
  }

  function toggleAll() {
    const allOn = padArray.every(pad => pad.on);
    setPadArray(prevPadArray => prevPadArray.map(item => {
      return {...item, on: !allOn};
    }))
  }

  const buttonElements = padArray.map(pad => (
    <Pad toggle={toggle} id={pad.id} key={pad.id} color={pad.color} on={pad.on} />
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

      <div className="off">
        <button
          className={padArray.every(pad => pad.on) ? "all-on" : "all-off"}
          onClick={toggleAll}
        >
          {padArray.every(pad => pad.on) ? "Turn All Off" : "Turn All On"}
        </button>
      </div>
    </main>
  )
}

export default App
