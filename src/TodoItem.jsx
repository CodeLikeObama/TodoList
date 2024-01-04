export function TodoItem({ id, title, completed, checkItem, deleteTodo }) {
    return (
        <li>
            <label className="listItem">
                <input 
                type="checkbox" 
                checked={completed} 
                onChange={e => checkItem(id, e.target.checked)}
                className="checkBox"
                >
                </input>
                {title}
            </label>
            <button className="deleteBtn" 
            onClick={() => deleteTodo(id)}
            >delete
            </button>
        </li>
    )
}