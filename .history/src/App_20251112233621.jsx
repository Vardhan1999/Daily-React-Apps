import React, { useState } from "react";

export default function App() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            {open && <button onClick={() => setOpen(true)}>Open</button>}
            {open && (
                <div>
                    <h2>Modal Content</h2>
                    <button onClick={() => setOpen(false)}>Close</button>
                </div>
            )}
        </div>
    )
}
