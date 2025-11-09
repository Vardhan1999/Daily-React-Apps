import { useState } from "react";


export default function App() {
    const [text, setText] = useState("");
    const [todo, setTodo] = useState([]);

    function addTodo() {
        if (!text.trim()) return;
        setTodo([...todo, { id: crypto.randomUUID(), text, completed: false }]);
        setText("");
    }

    function toggleTodo(id) {
        setTodo(todo.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    }

    function deleteTodo(id) {

    }

    return (
        <>
            <h2>Todo List!</h2>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {
                    todo.map(todo => (
                        <li key={todo.id}>
                            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
                            {todo.text}
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}


