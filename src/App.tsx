import { useState } from 'react';
import './App.css'

function App() {
 const [count,setCount] = useState(0)
  return (
    <>
    <div>
      <h1 className="number">{count}</h1>
    </div>
    <div className="buttons">
        <button className="button" onClick={() =>setCount(count + 1)} > Increase </button>
        <button className="button" onClick={() =>setCount(0)} > Reset </button>
        <button className="button" onClick={() =>setCount(count - 1)} > Decrease </button>
    </div>
    </>
 
  )
}

export default App;
