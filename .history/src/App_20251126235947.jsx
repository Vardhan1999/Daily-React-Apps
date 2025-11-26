import { useState } from "react";

export default function App() {
    const [text, setText] = useState("Copy this text");
    const [copied, setCopied] = useState(false);
}
