import { useState } from "react";


export default function App() {
    const [text, setText] = useState("");

    function addTodo() {
    }

    return (
        <>
            <h2>Todo List!</h2>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={addTodo}>Add Todo</button>
        </>
    )
}


