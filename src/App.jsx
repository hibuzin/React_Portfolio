import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import ProcessSection from "./components/process_section"
import AboutSection from "./components/AboutSection";
import TechSection from "./components/TechSection";
import ContactSection from "./components/ContactSection";
import ClothingProject from "./pages/ClothingProject";
import JewelleryProject from "./pages/JewelleryProject";
import LandProject from "./pages/LandProject";
import BlogSection from "./components/BlogSection";

const scrollPositions = {}; 

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <BlogSection/>
      <AboutSection />
      <ContactSection />
    </>
  );
}

function ScrollManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      scrollPositions[pathname] = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    const savedPosition = scrollPositions[pathname];
    if (savedPosition !== undefined) {
      setTimeout(() => {
        window.scrollTo({ top: savedPosition, behavior: "instant" });
      }, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/clothing" element={<ClothingProject />} />
        <Route path="/project/jewellery" element={<JewelleryProject />} />
        <Route path="/project/land" element={<LandProject />} />
      </Routes>
    </>
  );
}

export default App;