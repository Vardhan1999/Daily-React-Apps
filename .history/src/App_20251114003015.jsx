import React, { useEffect, useState } from "react";

export default function App() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setTimeout(() => setSeconds(prev => prev + 1000), 1000);
        return () => clearTimeout(interval)
    }, [])
}
