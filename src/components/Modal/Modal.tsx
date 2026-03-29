import { useEffect } from "react";
import styled from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  useEffect(() => {
    function callback(evt: KeyboardEvent) {
      console.log(evt.key);
      if (evt.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", callback);

    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [onClose]);
  return (
    <div className={styled.backdrop} role="dialog" aria-modal="true">
      <div className={styled.modal}>
        <button
          onClick={onClose}
          className={styled.closeButton}
          aria-label="Close modal"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
