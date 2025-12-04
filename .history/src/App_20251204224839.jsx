import { useState } from "react";

export default function App() {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);

    function addTodos() {
        if (!text.trim()) return;

        setTodos([...todos, { id: crypto.randomUUID(), text, completed: false }])
        setTodos("");
    }

    function toggleTodos(id) {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    }

    function deleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <>
            <h2>Todo List</h2>
            <input value={text} onChange={(e) => setText(e.target.validity)} placeholder="Enter a task" />
            <button onClick={addTodos}>Add Task</button>

            <ul>
                {todos.map((todo) => (<li key={todo.id}>
                    <input type="checkbox" checked={todo.completed} onChange={() => toggleTodos(todo.id)} />
                    {todo.text}
                </li>))}
            </ul>
        </>
    )
}
