import { createContext } from "react";

export type ModalType = "" | "image";

interface ModalContextType {
  modalType: ModalType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  modalPayload: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  openModal: (params: { type: ModalType; payload?: any }) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType>({
  modalType: "",
  modalPayload: null,
  openModal: () => {},
  closeModal: () => {},
});
