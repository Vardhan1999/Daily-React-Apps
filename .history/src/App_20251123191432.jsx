import { useEffect } from "react";
import { useState } from "react";

function useDebounce(value, delay = 300) {
    const [debounced, setDebounced] = useState(value);

    useEffect(() => {
        const t = setTimeout(() => setDebounced(value), delay);
        return () => clearTimeout(t);
    })
}

export default function App() {

}
