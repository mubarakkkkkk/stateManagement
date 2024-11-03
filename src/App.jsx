import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10)
  function addOne() {
    setCount(count + 1)
  };
function NameList() {
  const[list, setList] = useState(["jack","jill","john"]);
  const[name, setName] = useState("");
  const onAddName = () => {
    setList([...list, name])
    setName("")
  };
  return (
    <>
      <button onClick={addOne}>count = {count}</button>
      <ul>
        {
          list.map((name) => (
            <li key={name}>
                {name}
            </li>
          ))}
      </ul>
      <input type="text"
      value={name}
      onChange={(e) => setName(e.target.value)} />
      <button onClick={onAddName}>Add Name</button>
    </>
  )
}
return(
  <div>
  <NameList />
  </div>
)
 
}

export default App
