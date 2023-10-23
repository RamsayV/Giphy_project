export default function GifListItem ({data}) {
    data = gifs
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