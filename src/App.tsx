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
        <button className="button" onClick={() =>setCount(count + 1)} > ClickMe </button>
        <button className="button" onClick={() =>setCount(0)} > Reset </button>
    </div>
    </>
 
  )
}

export default App;
