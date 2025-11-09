import { useState } from "react";


export default function App() {
    const [text, setText] = useState("");
    const [todo, setTodo] = useState([]);

    function addTodo() {
        if (!text.trim()) return;
        setTodo([...todo, { id: crypto.randomUUID(), text, completed: false }]);
        setText("");
    }

    return (
        <>
            <h2>Todo List!</h2>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={addTodo}>Add Todo</button>
        </>
    )
}


