import { useState } from "react";

export default function App() {
    const [query, setQuery] = useState("");
    const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

    const filtered = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));

    return (
        <div>
            <input placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
    )
}
