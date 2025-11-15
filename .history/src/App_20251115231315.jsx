import { useEffect } from "react";
import { useState } from "react";

export default function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
        setLoading(false);
    }, []);

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <ul>
            {users.map(user => (<li>{item}</li>))}
        </ul>
    )
}
