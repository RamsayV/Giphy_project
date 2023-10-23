import { Card } from "react-bootstrap";

export default function GifListItem({ gifs }) {
    // Use .slice(0, 8) to get the first 8 items from the array
    const first8Gifs = gifs.slice(0, 8);

    return (
        <Card>
            <div style={{ marginTop: '20px' }}>
                {first8Gifs.map(gif => (
                    <img
                        key={gif.id}
                        src={gif.images.original.url}
                        alt={gif.title}
                        style={{ margin: '10px' }}
                    />
                ))}
            </div>
        </Card>
    );
}

