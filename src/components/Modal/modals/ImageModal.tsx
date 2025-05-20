import s from "../WrapModal.module.scss";

interface ImageModalProps {
  src: string;
  isClosing?: boolean;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, isClosing }) => {
  if (!src) return null;

  return (
    <div
      className={`${s.image} ${isClosing ? s.fadeOut : ""}`}
      onClick={(e) => e.stopPropagation()}>
      <img src={src} alt='Modal content' />
    </div>
  );
};

export default ImageModal;
