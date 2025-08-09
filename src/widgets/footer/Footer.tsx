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
          style={{ color: "oklch(.2 .034 265.48)", fontWeight: "bold" }}
          href="https://www.evanmarshall.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          evanmarshall<span style={{ color: "oklch(.68 .2117 30.54)" }}>.</span>
          <span style={{ color: "oklch(.69 .0476 79.1)" }}>dev</span>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
