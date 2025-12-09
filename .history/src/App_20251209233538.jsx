import { useState } from "react";

export default function App() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setOpen(true)}>Open Model</button>
        </div>
    )
}
