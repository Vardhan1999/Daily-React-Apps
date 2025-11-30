import { useState } from "react";

export default function App() {
    const [todos, setTodos] = useState([
        { id: "t1", text: "Buy Milk", completed: false },
        { id: "t2", text: "Read Book", completed: false },
    ]);

    const [editingList, setEditingList] = useState(null);
    const [draft, setDraft] = useState("");
}
