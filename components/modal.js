import React, { useEffect, useState } from "react";
import styles from "./modal.module.css";

const Modal = ({ show, onClose, title, content, actions }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);
    }
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div
      className={`${styles.modal} ${visible ? styles.visible : ""}`}
      onClick={onClose}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="mb-4">{content}</div>
        <div className="flex justify-end">{actions}</div>
      </div>
    </div>
  );
};

export default Modal;
