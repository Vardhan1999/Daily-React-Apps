import { useState } from "react";

export default function App() {
    const [city, setCity] = useState("");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);

    async function fetchWeather() {
        if (!city.trim()) return;

        setLoading(true);
        setErr(null);
    }
}
