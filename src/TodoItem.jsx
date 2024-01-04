export function TodoItem({ id, title, completed, checkItem, deleteTodo }) {
    return (
        <li>
            <label>
                <input 
                type="checkbox" 
                checked={completed} 
                onChange={e => checkItem(id, e.target.checked)}
                className="checkBox"
                />
                {title}
            </label>
            <button className="deleteBtn" 
            onClick={() => deleteTodo(id)}
            >delete
            </button>
        </li>
    )
}