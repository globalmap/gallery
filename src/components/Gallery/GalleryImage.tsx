
interface GalleryImageProps {
  src: string;
  description?: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({src, description}) => {
  return (
    <figure>
      <img src={src} alt='Lorem ipsum dolor sit amet' />
      {description && (
        <figcaption>
          <h3>Mountains</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </figcaption>
      )}
    </figure>
  );
};

export default GalleryImage;
