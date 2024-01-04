import { useEffect, useState } from "react"
import { AddItems } from "./AddItems.jsx"
import { TodoList } from "./TodoList.jsx"
import "./style.css"

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS") //gets the values out of local storage
    if (localValue == null) return [] //if there aint any it returns an empty array

    return JSON.parse(localValue) //if there are some it builds the Objects provided by the JSON String
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos)) //run this function anytime stringify converts the todos to a JSON String
  }, [todos]) // a value in the todos changes

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [...currentTodos, { id: crypto.randomUUID(), title, completed: false}]
    })
  }

  function checkItem(id, completed) {
     setTodos(currentTodos => {
       return currentTodos.map(todo => {
         if (todo.id === id) {
             return {...todo, completed}
         }

         return todo
       })
     })
   }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  
 

  return (
    <>
    <AddItems onSubmit={addTodo} />
    <TodoList todos={todos} checkItem={checkItem} deleteTodo={deleteTodo}/>
    </>
    
  )
}
