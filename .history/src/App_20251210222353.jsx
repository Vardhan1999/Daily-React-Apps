import { useEffect, useState } from "react";

export default function App() {
    const [seconds, setSeconds] = useState(0);

    return (
        useEffect(() => {
            const interval = setInterval(() => setSeconds(s => s + 1), 1000);
            return () => clearInterval(interval);
        }, [])
    )
}
