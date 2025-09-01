import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/Services/TopProducts";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";

// Page Components
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

// Feature Pages (View Button Targets)
import Security from "./pages/Security";
import Manpower from "./pages/Manpower";
import Smart from "./pages/Smart";

// Services section pages
import SecurityServices from "./pages/SecurityServices";
import TechSolutions from "./pages/TechSolutions";

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll to top
  }, [pathname]);
  return null;
};

// Home Section
const Home = ({ handleOrderPopup }) => (
  <div>
    <Hero handleOrderPopup={handleOrderPopup} />
    <TopProducts handleOrderPopup={handleOrderPopup} />
    <Subscribe />
    <Testimonials />
    <Footer />
  </div>
);

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1000,
      easing: "ease-in-out",
      delay: 50,
      once: true, // animate only once for better user experience
    });
    AOS.refreshHard(); // refresh after init for dynamic content
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Routes>
          <Route
            path="/"
            element={<Home handleOrderPopup={handleOrderPopup} />}
          />

          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />

          <Route path="/security" element={<Security />} />
          <Route path="/manpower" element={<Manpower />} />
          <Route path="/smart" element={<Smart />} />

          <Route path="/security-services" element={<SecurityServices />} />
          <Route path="/tech-solutions" element={<TechSolutions />} />
        </Routes>

        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </Router>
  );
};

export default App;
