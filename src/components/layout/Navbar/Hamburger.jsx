import styles from "./Hamburger.module.css";

const Hamburger = ({ isOpen, ...props }) => {
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
