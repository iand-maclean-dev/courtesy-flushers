import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Courtesy Flushers</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link
          to="/contact"
          style={{
            color: "white",
            backgroundColor: "#635bff",
            borderRadius: "0.5rem",
          }}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
