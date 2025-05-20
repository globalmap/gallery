import s from "./Gallery.module.scss";
import GalleryImage from "./GalleryImage";
import { images } from "../../utils/images";

const Gallery = () => {

  return (
    <main className={s.container}>
      <h1>Photo Gallery</h1>

      <div className={s.gallery}>
        {images.map((image, index) => (
          <GalleryImage key={index} src={image.src} />
        ))}
      </div>
    </main>
  );
};

export default Gallery;
