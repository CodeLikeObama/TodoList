import { TodoItem } from "./TodoItem"

export function TodoList({ todos, checkItem, deleteTodo }) {
   

    return (
        <>
        <h1 className="header">Todo List</h1>
        <ul className="list">
            {todos.map(todo => {
            return (
                <TodoItem
                    {...todo} 
                    key={todo.id} 
                    checkItem={checkItem}
                    deleteTodo={deleteTodo}
                />
            )
            })}
        </ul>
        </>
    
      )
}