import React from 'react';
import styles from '../styles/Home.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Developed by Esteban Santini. All rights reserved.</p>
      <a
        href="https://www.linkedin.com/in/estebansantini"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.footerLink}
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/esantini"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.footerLink}
      >
        GitHub
      </a>
    </footer>
  );
};

export default Footer;