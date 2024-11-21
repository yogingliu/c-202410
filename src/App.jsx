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
  const [inputValue, setInputValue] = useState('')
  // var count = 0
  // count = count + 1
  const [todoListItems, setTodoItems] = useState([])

  const saveTodoListItem = () => {
    // todoListItems.push(1)
    // todoListItems = todoListItems + t
    const newResult = [...todoListItems, { 
      id: todoListItems.length, 
      value: inputValue, 
      isCheck: false
    }]
    setTodoItems(newResult)
    setInputValue('')
    // console.log('in', newResult)
  }
  // console.log('out', todoListItems)
  const checkHandle = (id) => {
    const newArr = todoListItems.map(item => {
      if(id !== item.id) return item
      return {
        id: item.id,
        value: item.value,
        isCheck: !item.isCheck,
      }
    })
    setTodoItems(newArr)
  }
 console.log(todoListItems)
  return (
    <>
      <div>
        {
          todoListItems.map(item => (
            <div style={{ display: 'flex' }} key={item.id}>
              <input type="checkbox" onChange={() => checkHandle(item.id)} />
              <div style={{ color: item.id === 0 ? 'white': 'red' }} >{item.value}</div>
            </div>
          ))
        }
        <div className="card">
          <input type="text" value={inputValue} onChange={(e) => {console.log('change');setInputValue(e.target.value)}} />
          <button onClick={saveTodoListItem}>save</button>
        </div>
      </div>
    </>
  )
}

export default App
