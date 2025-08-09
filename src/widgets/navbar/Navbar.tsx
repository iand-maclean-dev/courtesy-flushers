import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "@/shared/ui/Logo";
import Hamburger from "./Hamburger";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Prevent body scroll when the mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup function to reset scroll on component unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarBrand}>
          <Link to="/" className={styles.logoLink} onClick={handleLinkClick}>
            <Logo />
            <h1 className={styles.brandName}>Courtesy Flushers</h1>
          </Link>
        </div>

        <Hamburger isOpen={isMenuOpen} onClick={handleToggleMenu} />

        <div
          className={`${styles.navbarLinks} ${
            isMenuOpen ? styles.mobileMenuOverlay : ""
          }`}
        >
          <Link to="/" className={styles.navLink} onClick={handleLinkClick}>
            Home
          </Link>
          <Link
            to="/about"
            className={styles.navLink}
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link
            to="/services"
            className={styles.navLink}
            onClick={handleLinkClick}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className={`${styles.navLink} ${styles.primary}`}
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
