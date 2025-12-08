import { useState } from "react";

export default function App() {
    const [active, setActive] = useState("tab1");

    return (
        <div>
            <button onClick={() => setActive("tab1")}>Tab 1</button>
            <button onClick={() => setActive("tab2")}>Tab 2</button>
        </div>
    )
}
