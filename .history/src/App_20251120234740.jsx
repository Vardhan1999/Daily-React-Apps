import { useState } from "react";

export default function App() {
    const products = [
        { id: 'p1', name: 'Shoe', price: 49.99 },
        { id: 'p2', name: 'Hat', price: 19.5 },
        { id: 'p3', name: 'T-Shirt', price: 25.0 }
    ];
    const [cart, setCart] = useState([]);

    function addToCart(product) {
        setCart((prev) => {
            const existing = prev.find((p) => p.id === product.id);

            if (existing) {
                return prev.map((p) => p.id === product.id ? { ...p, qty: p.qty + 1 } : p);
            }

            return [...prev, { ...product, qty: 1 }];
        })
    }
    function removeFromCart(id) {
        setCart((prev) => prev.filter(p => p.id !== id));
    }

    const total = cart
        .reduce((sum, p) => sum + p.qty * p.price, 0)
        .toFixed(2);

    return (
        <div>
            <h3>Products</h3>
            <ul>
                {products.map(p => (<li>{p.name}- ${p.price} <button onClick={() => addToCart(p)}>Add</button></li>))}
            </ul>
        </div>
    )
}
