import { useState, useEffect } from "react";

function useLocalStorage(key, initial) {
    const [state, useState] = useState(() => {
        try {
            const raw = localStorage.getItem(key)
            return raw ? JSON.parse(raw) : initial;
        }
        catch {

        }
    })
}

export default function App() {

}
