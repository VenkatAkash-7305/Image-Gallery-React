import ImageCard from "./ImageCard";
import images from "../data";

function Gallery() {
  return (
    <div className="gallery">
      {images.map((img) => (
        <ImageCard key={img.id} image={img} />
      ))}
    </div>
  );
}

export default Gallery;