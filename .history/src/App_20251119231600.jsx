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

        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
                    city
                )}&units=metric&appid=YOUR_API_KEY`
            );

            if (!res.ok) throw new Error("City not found");

            const json = await res.json();
            setData(json);
        }
        catch (e) {
            setErr(e);
            setData(null);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <h3>Weather App</h3>
            <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter City" />
            <button onClick={fetchWeather}>Search</button>

            {loading && <p>Loading...</p>}

            {err && <p>{err}</p>}

            {data && (
                <div>
                    <h4>{data.name} - {data.sys?.country}</h4>
                    <p>Temp: {data.main?.temp}°C</p>
                    <p>Weather: {data.weather?.[0]?.description}</p>
                </div>
            )}
        </div>
    )
}
