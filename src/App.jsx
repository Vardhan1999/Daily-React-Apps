import React, { useState } from "react";

export default function App() {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);

    function addTodos() {
        if (!text.trim()) return;
        setTodos([...todos, { id: crypto.randomUUID(), text, completed: false }]);
        setText("");
    }

    function toggleButton(id) {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    function deleteTodos(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <div>
            <h2>Todo List!</h2>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={addTodos}>Add</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.completed} onChange={() => toggleButton(todo.id)} />
                        {todo.text}
                        <button onClick={() => deleteTodos(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
