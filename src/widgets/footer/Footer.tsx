import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>
        Copyright &copy; <strong>{currentYear}</strong> · Website carefully
        crafted by{" "}
        <a
          href="https://www.evanmarshall.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          evanmarshall<span>.</span>
          <span>dev</span>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
