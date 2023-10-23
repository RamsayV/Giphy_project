import { Card } from "react-bootstrap"

export default function GifListItem ({ gifs }) {
    return (
        <Card>
         <div style={{ marginTop: '20px' }}>
        {gifs.map(gif => (
          <img
            key={gif.id}
            src={gif.images.fixed_width.url}
            alt={gif.title}
            style={{ margin: '10px' }}
          />
        ))}
      </div>
        </Card>
    )
}