import React, { useEffect, useRef } from "react";
import "./Dialog.css";

type DialogProps = {
  isModal: boolean;
  isOpen: boolean;
  hasClose: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Dialog: React.FC<DialogProps> = ({
  isModal,
  isOpen,
  hasClose,
  onClose,
  children,
}) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialogElement = dialogRef.current;

    if (dialogElement) {
      const handleDialogClose = () => {
        onClose();
      };

      dialogElement.addEventListener("close", handleDialogClose);

      return () => {
        dialogElement.removeEventListener("close", handleDialogClose);
      };
    }
  }, [onClose]);

  useEffect(() => {
    const dialogElement = dialogRef.current;

    if (dialogElement) {
      if (isOpen) {
        if (isModal) {
          dialogElement.showModal();
        } else {
          dialogElement.show();
        }
      } else {
        dialogElement.close();
      }
    }

    return () => {
      if (dialogElement) {
        dialogElement.close();
      }
    };
  }, [isOpen]);

  return (
    <dialog ref={dialogRef}>
      {hasClose && (
        <button className="dialog-close-btn" onClick={onClose}>
          Close
        </button>
      )}
      {children}
    </dialog>
  );
};

export default Dialog;
