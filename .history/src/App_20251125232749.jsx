import { useState } from "react";

export default function App() {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState({
        name: "",
        email: "",
        address: ""
    });

    function next() {
        setStep((s) => Math.min(3, s + 1));
    }
}
