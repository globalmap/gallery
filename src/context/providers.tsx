import React, { useState, type ReactNode } from "react";
import type { ModalType } from "./contexts";
import { ModalContext } from "./contexts";

interface ModalContextProviderProps {
  children: ReactNode;
}

export const ModalContextProvider: React.FC<ModalContextProviderProps> = ({
  children,
}) => {
  const [modalType, setModalType] = useState<ModalType>("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [modalPayload, setModalPayload] = useState<any>(null);

  const openModal = ({
    type,
    payload = null,
  }: {
    type: ModalType;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any;
  }) => {
    setModalType(type);
    setModalPayload(payload);
  };

  const closeModal = () => {
    setModalType("");
    setModalPayload(null);
  };

  return (
    <ModalContext.Provider
      value={{ modalType, modalPayload, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
