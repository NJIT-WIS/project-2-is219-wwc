// Import required dependencies and components
import React from 'react';
import Link from 'next/link';
import styles from './footer.module.css';

// Define the Footer component
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerColumns}>
        <div className={styles.footerColumn}>
          <h4>About</h4>
          <ul>
            <li>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/mission">
                <a>Our Mission</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>Education & Research</h4>
          <ul>
            <li>
              <Link href="/research">
                <a>Research & Case Studies</a>
              </Link>
            </li>
            <li>
              <Link href="/agile-lean-principles">
                <a>Agile & Lean Principles</a>
              </Link>
            </li>
            <li>
              <Link href="/resources">
                <a>Resources & Tools</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>Professional Development</h4>
          <ul>
            <li>
              <Link href="/professional-development">
                <a>Professional Development</a>
              </Link>
            </li>
            <li>
              <Link href="/partnerships">
                <a>Partnerships & Collaborations</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>Community & Support</h4>
          <ul>
            <li>
              <Link href="/mental-health">
                <a>Mental Health & Well-being</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerInfo}>
        <p>&copy; {new Date().getFullYear()} MyWebClass.org. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;