import { useState } from "react";

export default function App() {
    const [todos, setTodos] = useState([
        { id: "t1", text: "Buy Milk", completed: false },
        { id: "t2", text: "Read Book", completed: false },
    ]);

    const [editingId, setEditingId] = useState(null);
    const [draft, setDraft] = useState("");

    function startEdit(todo) {
        setEditingId(todo.id);
        setDraft(todo.text);
    }

    function save(id) {
        setTodos((ts) => ts.map((t) => (t.id === id ? { ...t, text: draft } : t)));
    }
}
