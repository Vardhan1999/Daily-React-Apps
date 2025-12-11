import { useEffect, useState } from "react";

export default function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.fetch();
            setUsers(data);
            setLoading(false);
        }

        fetchUsers();
    }, []);

    if (loading) return <h2>Loading...</h2>

    return (
        <div>
            <h1>User Lists</h1>
        </div>
    )

}