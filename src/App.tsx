import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import HomePage from "@/pages/home/page";
import About from "@/pages/about/page";
import Contact from "@/pages/contact/page";
import Services from "@/pages/services/services";
import Navbar from "@/widgets/navbar/Navbar";
import Footer from "@/widgets/footer/Footer";

function App() {
  return (
    <Router>
      <div className="appContainer">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main">
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
