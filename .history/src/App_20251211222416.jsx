import { useEffect, useState } from "react";

export default function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.fetch();
        setUsers(data);
        setLoading(true);
    })

}