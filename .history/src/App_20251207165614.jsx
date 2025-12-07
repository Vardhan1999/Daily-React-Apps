import { useState } from "react";

export default function App() {
    const [open, setOpen] = useState(null);
    const data = [{ id: 1, title: 'Section 1', content: 'Content of section 1' },
    { id: 2, title: 'Section 2', content: 'Content of section 2' }
    ]
}
