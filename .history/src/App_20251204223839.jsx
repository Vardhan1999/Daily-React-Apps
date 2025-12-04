import { useState } from "react";

export default function App() {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);

    function addTodos() {
        if (!text.trim()) return;

        setTodos([...todos, { id: crypto.randomUUID(), text, completed: false }])
    }
}
