import s from "./WrapModal.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageModal from "./modals/ImageModal";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "../../hooks/useModal";

const WrapModal: React.FC = () => {
  const { modalType, modalPayload, closeModal } = useModal();

  if (modalType === "") return;

  const handleClose = () => {
    closeModal();
  }

  return (
    <div className={s.container} onClick={handleClose}>
      <div className={s.close} onClick={handleClose}>
        <FontAwesomeIcon icon={faXmark} color='#fff' size='xl' />
      </div>
      {modalType === "image" && <ImageModal src={modalPayload.src} />}
    </div>
  );
}

export default WrapModal;