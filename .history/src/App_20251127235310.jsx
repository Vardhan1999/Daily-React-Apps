import { useState, useEffect } from "react";

function useLocalStorage(key, initial) {
    const [state, useState] = useState(() => {
        try {
            const raw = localStorage.getItem(key)
            return raw ? JSON.parse(raw) : initial;
        }
        catch {
            return initial;
        }
    })

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(state));
        } catch { }
    }, [key, state]);

    return [state, setState];
}

export default function App() {

}
