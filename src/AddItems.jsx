import { useState } from "react"

export function AddItems({ onSubmit }) {
    const [newItem, setNewItem] = useState("")
    
    function handleSubmit(e) {
        e.preventDefault()
        
        if(newItem === "") return

        onSubmit(newItem)

        setNewItem("")
        }
    
    return (
        <form onSubmit={handleSubmit} className="new-items-form">
            <div className="row">
                <label htmlFor="item">New Item</label>
                    <input 
                    value={newItem} 
                    onChange={event => setNewItem(event.target.value)} 
                    type="text" 
                    className="inputField" 
                    id="item">
                </input>
            </div>
                <button className="addBtn">Add</button>
        </form>
    )
}

