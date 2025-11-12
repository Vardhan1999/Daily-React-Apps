import React, { useState } from "react";

export default function App() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button onClick={() => setOpen(true)}>Open Model</button>
            {open && (
                <div>
                    <div>Model Content</div>
                    <button onClick={() => setOpen(false)}>Close Model</button>
                </div>
            )}
        </>
    )
}
