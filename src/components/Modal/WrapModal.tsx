import React, { useEffect, useState } from "react";
import s from "./WrapModal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ImageModal from "./modals/ImageModal";
import { useModal } from "../../hooks/useModal";
import clsx from "clsx";

const ANIMATION_DURATION = 500;

const WrapModal: React.FC = () => {
  const { modalType, modalPayload, closeModal } = useModal();
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    if (modalType !== "") {
      setIsVisible(true);
      setIsAnimatingOut(false);
    } else if (isVisible) {
      // play fade out
      setIsAnimatingOut(true);
      setTimeout(() => setIsVisible(false), ANIMATION_DURATION);
    }
  }, [modalType, isVisible]);

  const handleClose = () => {
    closeModal();
  };

  if (!isVisible) return null;

  return (
    <div
      className={clsx(s.container, {
        [s.fadeOutContainer]: isAnimatingOut,
      })}
      onClick={handleClose}>
      <div className={s.close} onClick={handleClose}>
        <FontAwesomeIcon icon={faXmark} color='#fff' size='xl' />
      </div>
      {modalType === "image" && modalPayload?.src && (
        <ImageModal src={modalPayload.src} isClosing={isAnimatingOut} />
      )}
    </div>
  );
};

export default WrapModal;
