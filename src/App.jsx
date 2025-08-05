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
      // The visualViewport API gives the height of the viewport that is
      // actually visible to the user, excluding on-screen keyboards or
      // browser UI. This is the most reliable way to get the height.
      const vh = (window.visualViewport?.height || window.innerHeight) * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // Set the initial value.
    setViewportHeight();

    // The 'resize' event on visualViewport is the key to handling the
    // browser UI appearing and disappearing on mobile. We add a fallback
    // to the window resize event for older browsers.
    const visualViewport = window.visualViewport;
    if (visualViewport) {
      visualViewport.addEventListener("resize", setViewportHeight);
      return () =>
        visualViewport.removeEventListener("resize", setViewportHeight);
    }
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
