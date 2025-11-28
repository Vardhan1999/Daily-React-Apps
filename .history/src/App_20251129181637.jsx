import { useState } from "react";

export default function App() {
    const [items, setItems] = useState(["ItemsA", "ItemsB", "ItemsC"]);
    const [dragIndex, setDragIndex] = useState(null);

    function onDragStart(e, idx) {
        setDragIndex(idx);
        e.dataTransfer.effectAllowed = "move";
    }

    function onDrop(e, idx) {
        e.preventDefault();
        const newItems = [...items];
    }
}
