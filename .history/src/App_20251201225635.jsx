import { useState } from "react";

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Counter:{count}</h2>
        </div>
    )
}
