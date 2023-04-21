import React, { useEffect, useState } from 'react';
import styles from './modal.module.css';

const Modal = ({ show, children, onClose }) => {
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
      className={`${styles.modal} ${visible ? styles.visible : ''}`}
      onClick={onClose}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
