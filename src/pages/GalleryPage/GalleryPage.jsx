import "./GalleryPage.css";

function GalleryPage() {
  const images = [
    "https://picsum.photos/300/200?random=1",
    "https://picsum.photos/300/200?random=2",
    "https://picsum.photos/300/200?random=3",
    "https://picsum.photos/300/200?random=4",
  ];

  return (
    <div className="gallery-container">
      <h1>Event Gallery</h1>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <img key={i} src={img} alt={`Event ${i}`} />
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
