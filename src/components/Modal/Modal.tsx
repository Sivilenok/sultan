import { ReactNode, useEffect } from "react";
import styles from "./styles.module.scss";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  clearBasket?: () => void;
}

export const Modal = ({ isOpen, onClose, children, clearBasket}: IProps) => {
  useEffect(() => {
    if (isOpen) {
      window.scrollTo(0, 0);
    }
  }, [isOpen]);

  const handleClose = () => {
    onClose();
    if (clearBasket) {
      clearBasket();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.screen}>
      <div className={styles.window}>
        <button className={styles.closeButton} onClick={handleClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};
