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
}
