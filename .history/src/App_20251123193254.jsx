import { useEffect } from "react";
import { useState } from "react";

function useDebounce(value, delay = 300) {
    const [debounced, setDebounced] = useState(value);

    useEffect(() => {
        const t = setTimeout(() => setDebounced(value), delay);
        return () => clearTimeout(t);
    }, [value, delay])
    return debounced;
}

export default function App() {
    const [q, setQ] = useState("");
    const debouncedQ = useDebounce(q, 500);
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (!debouncedQ) {
            setResults([]);
            return;
        }

        const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

        setResults(
            items.filter((i) => i.toLowerCase().includes(debouncedQ.toLowerCase()))
        )
    }, [debouncedQ])

    return (
        <div>
            <input placeholder="Search..." value={q} onChange={(e) => setQ(e.target.value)} />
            <p>Searching for:{debouncedQ}</p>

            <ul>
                {
                    results.map((r) => (<li key={r}>{r}</li>))
                }
            </ul>
        </div>
    )
}
