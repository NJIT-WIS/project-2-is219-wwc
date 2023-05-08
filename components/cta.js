// components/cta.js
import React from 'react';
import styles from './cta.module.css';

const CallToAction = ({ text, onClick }) => {
  return (
    <div className={styles.ctaContainer}>
      <p>{text}</p>
      <button className={styles.ctaButton} onClick={onClick}>
        Sign Up as a Volunteer
      </button>
    </div>
  );
};

export default CallToAction;
