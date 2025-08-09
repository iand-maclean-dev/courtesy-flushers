import styles from "./Hamburger.module.css";
import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
}

const Hamburger: React.FC<Props> = ({ isOpen, ...props }) => {
  const label = isOpen ? "Close menu" : "Open menu";

  return (
    <button
      className={styles.hamburgerButton}
      aria-label={label}
      aria-expanded={isOpen}
      {...props}
    >
      <div
        className={`${styles.bar} ${styles.topBar} ${
          isOpen ? styles.isOpen : ""
        }`}
      />
      <div
        className={`${styles.bar} ${styles.middleBar} ${
          isOpen ? styles.isOpen : ""
        }`}
      />
      <div
        className={`${styles.bar} ${styles.bottomBar} ${
          isOpen ? styles.isOpen : ""
        }`}
      />
    </button>
  );
};

export default Hamburger;
