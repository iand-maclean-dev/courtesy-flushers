import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import HomePage from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";

function App() {
  useEffect(() => {
    const setViewportHeight = () => {
      // window.innerHeight gives the actual viewport height.
      // We calculate 1% of it to create a value similar to the 'vh' unit.
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // Set the value on initial load and on window resize.
    window.addEventListener("resize", setViewportHeight);
    setViewportHeight();

    return () => window.removeEventListener("resize", setViewportHeight);
  }, []);

  return (
    <Router>
      <div className="appContainer">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
