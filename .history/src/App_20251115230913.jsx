import { useEffect } from "react";
import { useState } from "react";

export default function App() {
    const [user, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        const data = await fetch()
    },[])
}
