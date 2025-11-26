import { useState, useEffect } from "react";

function useLocalStorage(key, initial) {
    const [state, useState] = useState(() => {
        try {
            const raw = localStorage.getItem(key)
        }
        catch {

        }
    })
}

export default function App() {

}
