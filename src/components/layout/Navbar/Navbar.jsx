import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "../../common/Logo";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarBrand}>
          <Link to="/" className={styles.logoLink}>
            <Logo />
            <h1>Courtesy Flushers</h1>
          </Link>
        </div>
        <div className={styles.navbarLinks}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
          <Link to="/about" className={styles.navLink}>
            About
          </Link>
          <Link to="/services" className={styles.navLink}>
            Services
          </Link>
          <Link to="/contact" className={`${styles.navLink} ${styles.primary}`}>
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
