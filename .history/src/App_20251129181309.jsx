import { useState } from "react";

export default function App() {
    const [items, setItems] = useState(["ItemsA", "ItemsB", "ItemsC"]);
    const [dragIndex, setDragIndex] = useState();
}
