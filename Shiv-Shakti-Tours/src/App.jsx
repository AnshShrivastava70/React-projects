import React, { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { HelmetProvider } from "react-helmet-async";
import Nav from "./components/Nav";
import Auth from "./components/Auth";
import Cards from "./components/Cards";
import About from "./components/About";
import Whatsapp from "./components/Whatsapp";
import Footer from "./components/Footer";
import Cardinfo from "./components/Cardinfo";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./components/Contact";
import OneDayTour from "./components/OneDayTour";

const AppContent = () => {
  const location = useLocation();
  const scrollRef = useRef(null);
  const locomotiveInstance = useRef(null);

  useEffect(() => {
    // Destroy previous instance if it exists
    if (locomotiveInstance.current) {
      locomotiveInstance.current.destroy();
    }

    // Initialize Locomotive Scroll
    locomotiveInstance.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1.2,
      lerp: 0.01, // Adjust speed if needed
    });

    // Clean up on component unmount
    return () => {
      if (locomotiveInstance.current) {
        locomotiveInstance.current.destroy();
      }
    };
  }, [location.pathname]); // Reinitialize on every page change

  return (
    <div ref={scrollRef} data-scroll-container>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Auth />
              <About />
              <Cards />
            </>
          }
        />
        <Route path="/places/:placeName" element={<Cardinfo />} />
        <Route path="/places/OneDayTour" element={<OneDayTour />} />
      </Routes>
      <Contact />
      <Whatsapp />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
