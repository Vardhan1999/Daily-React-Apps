import React, { useEffect, useState } from "react";

export default function App() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setSeconds(prev => prev + 1), 1000);
        return () => clearInterval(interval)
    }, [])

    return <h2>Timer : {seconds}s</h2>
}
