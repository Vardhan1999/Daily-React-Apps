import { useState } from "react";

export default function App() {
    const [text, setText] = useState("Copy this text");
    const [copied, setCopied] = useState(false);

    async function copy() {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        }
    }
}
