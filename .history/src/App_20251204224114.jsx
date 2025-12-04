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
}
