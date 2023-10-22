import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const incrementCount = () =>{
    setCount(prevCount => prevCount + 1)
  }

  const decrementCount = () =>{
    setCount((prevCount) => prevCount - 1);
  }

  const resetCount = () =>{
    setCount(0)
  }

  return (
    <>
      <div className="container">
        <h1 className="display--count">
          {count}
        </h1>

        <div className="tabs">
          <button onClick={decrementCount}>Decrement</button>
          <button onClick={incrementCount}>Increment</button>
          <button onClick={resetCount}>Reset</button>
        </div>

        <label htmlFor="count">
          <input type="number" name="count" />
          <button>Set new count</button>
        </label>

        <button className="trigger--btn" style={{
          backgroundColor: "orangered"
        }}>
          Trigger Error
        </button>
      </div>
    </>
  )
}

export default App
