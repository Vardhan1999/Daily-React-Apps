import { useState } from "react";

export default function App() {
    const [dark, setDark] = useState(false);

    return (
        <div style={{
            background: dark ? "#333" : "#fff",
            color: dark ? "#fff" : "#000",
            minHeight: "100vh",
        }}>
            <button onClick={() => setDark(!dark)}>Toggle Theme</button>
        </div>
    )
}