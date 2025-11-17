import { useState } from "react";

export default function App() {
    const items = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);
    const [page, setPage] = useState(1);
    const perPage = 5;
    const start = (page - 1) * perPage;
    const paginated = items.slice(start, start + perPage);

    return (
        <div>
            <ul>{paginated.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
    )
}
