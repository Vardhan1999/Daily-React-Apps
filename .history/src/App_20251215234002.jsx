import { useState } from "react";

export default function App() {
    const images = [
        {
            id: 1,
            thumb: "https://picsum.photos/id/101/100/75",
            large: "https://picsum.photos/id/101/600/400",
        },
        {
            id: 2,
            thumb: "https://picsum.photos/id/102/100/75",
            large: "https://picsum.photos/id/102/600/400",
        },
        {
            id: 3,
            thumb: "https://picsum.photos/id/103/100/75",
            large: "https://picsum.photos/id/103/600/400",
        },
    ]
    const [active, setActive] = useState(images[0].large);

    return (
        <div>
            <img src={active} alt="Large" style={{ width: "100%", maxWidth: 600 }} />

            <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                {images.map((img) => (
                    <img
                        key={img.id}
                        src={img.thumb}
                        alt={`Thumb ${img.id}`}
                        style={{
                            cursor: "pointer",
                            border:
                                active === img.large
                                    ? "2px solid #000"
                                    : "1px solid #ccc",
                        }}
                        onClick={() => setActive(img.large)}
                    />
                ))}
            </div>
        </div>
    )
}