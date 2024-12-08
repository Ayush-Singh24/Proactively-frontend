import "./index.css";

const images = [
  "/images/image-1.png",
  "/images/image-2.png",
  "/images/image-3.png",
  "/images/image-4.png",
  "/images/image-5.png",
  "/images/image-6.png",
  "/images/image-7.png",
  "/images/image-8.png",
];

function ImageLoop() {
  return (
    <div className="loop-container">
      <div className="img__slide-track">
        {images.map((image, index) => (
          <div className="img__slide" key={index}>
            <img src={image} alt={`${image}-${index}`} />
          </div>
        ))}
        {images.map((image, index) => (
          <div className="img__slide" key={index * 8}>
            <img src={image} alt={`${image}-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageLoop;
