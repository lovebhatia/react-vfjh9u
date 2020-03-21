import React,{useState,useRef} from "react"

function AppUseRef()
{
  const[newToDoValue,setNewToDoValue]=useState("")
  const[toDoList,setToDoList]=useState([])
  const inputRef=useRef(null)

  function handleChange(event)
  {
    setNewToDoValue(event.target.value)

  }
  function addToDo(event)
  {
      event.preventDefault();
      setToDoList(prevToDoList => [...prevToDoList,newToDoValue])
      setNewToDoValue("")
      inputRef.current.focus()
  }
      const allTodos = toDoList.map(todo => <p key={todo}>{todo}</p>)


  return(
    <div>
      <form>
      <input ref={inputRef} type="text" name="todo" value={newToDoValue} onChange={handleChange}></input>
      <button onClick={addToDo}>Add To Do Item</button>
      </form>
      {allTodos}
    </div>
  )
}
export default AppUseRef;