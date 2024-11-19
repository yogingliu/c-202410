import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// functional component
function App() {
  // // value
  // // {}
  // var a = 0
  // var b = a + 3
  // a = a + 1
  // console.log(a, b)
  // const [count, setCount] = useState(0)
  // const clickHandler = () => {
  //   setCount((count) => count + 1)
  // }
  const [t, setT] = useState('')
  // var count = 0
  // count = count + 1
  const [todoListItems, setTodoItems] = useState([])

  const saveTodoListItem = () => {
    // todoListItems.push(1)
    // todoListItems = todoListItems + t
    setTodoItems([...todoListItems, t])
  }
 
  return (
    <>
      <div>
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      {/* <h1>Custom + Vite + React</h1> */}
      <div className="card">
        {/* listener */}
        {/* <button onClick={clickHandler}>
          count is {count}
        </button> */}
        <input type="text" onChange={(e) => {setT(e.target.value)}} />
        <button onClick={saveTodoListItem}>save</button>
        {/* <p>
          t: {t}
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
