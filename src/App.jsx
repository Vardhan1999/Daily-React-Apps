import React, { useState } from "react";

export default function App() {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);

    function addTodos() {
        if (!text.trim) return;
        setTodos([...todos, { id: crypto.randomUUID(), text, completed: false }]);
        setText("");
    }

    function toggleTodo(id) {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    }

    function deleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <>
            <h2>Todo Lists!</h2>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={addTodos}>Add Todo</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
                        {todo.text}
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}
