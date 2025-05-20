import s from "../WrapModal.module.scss";

interface ImageModalProps {
  src: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ src }) => {
  return (
    <div className={s.image} onClick={(e) => e.stopPropagation()}>
      <img src={src} />
    </div>
  );
};

export default ImageModal;
