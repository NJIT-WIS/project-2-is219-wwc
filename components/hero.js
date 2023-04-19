import React from 'react';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>
        Welcome to MyWebClass.org
      </h1>
      <p className={styles.subtitle}>
        Pioneering the Future of Education
      </p>
      <p className={styles.description}>
        Join us in transforming education for the AI-driven world, fostering creativity, adaptability, and collaboration in students.
      </p>
      <button className={styles.cta}>Learn More</button>
    </div>
  );
};

export default Hero;