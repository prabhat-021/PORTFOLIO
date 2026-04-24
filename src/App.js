import { useEffect, useState } from "react";
import "./styles/portfolio.css";
import { portfolioContent } from "./data/siteContent";
import { navItems } from "./data/navigationItems";
import AboutSection from "./Components/portfolio/AboutSection";
import ContactSection from "./Components/portfolio/ContactSection";
import PortfolioFooter from "./Components/portfolio/PortfolioFooter";
import HeroSection from "./Components/portfolio/HeroSection";
import PortfolioNavbar from "./Components/portfolio/PortfolioNavbar";
import ProjectsSection from "./Components/portfolio/ProjectsSection";
import ScrollTopButton from "./Components/portfolio/ScrollTopButton";
import StackSection from "./Components/portfolio/StackSection";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setIsScrolled(currentPosition > 24);
      setShowScrollTop(currentPosition > 480);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const getClosestSection = () => {
      const offset = 140;
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      if (sections.length === 0) {
        return;
      }

      const closestSection = sections.reduce((currentClosest, section) => {
        const currentDistance = Math.abs(
          section.getBoundingClientRect().top - offset
        );

        if (!currentClosest) {
          return { id: section.id, distance: currentDistance };
        }

        return currentDistance < currentClosest.distance
          ? { id: section.id, distance: currentDistance }
          : currentClosest;
      }, null);

      if (closestSection) {
        setActiveSection((current) =>
          current === closestSection.id ? current : closestSection.id
        );
      }
    };

    getClosestSection();
    window.addEventListener("scroll", getClosestSection, { passive: true });
    window.addEventListener("resize", getClosestSection);

    return () => {
      window.removeEventListener("scroll", getClosestSection);
      window.removeEventListener("resize", getClosestSection);
    };
  }, []);

  const handleNavClick = (event, sectionId) => {
    event.preventDefault();
    setIsMenuOpen(false);
    setActiveSection(sectionId);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="portfolio-shell">
      <div className="background-orb background-orb-one" />
      <div className="background-orb background-orb-two" />

      <PortfolioNavbar
        activeSection={activeSection}
        content={portfolioContent}
        isMenuOpen={isMenuOpen}
        isScrolled={isScrolled}
        navItems={navItems}
        onNavClick={handleNavClick}
        onToggleMenu={() => setIsMenuOpen((current) => !current)}
      />

      <main>
        <HeroSection content={portfolioContent} onNavClick={handleNavClick} />
        <AboutSection content={portfolioContent} />
        <StackSection content={portfolioContent} />
        <ProjectsSection content={portfolioContent} />
        <ContactSection content={portfolioContent} />
      </main>

      <PortfolioFooter content={portfolioContent} />

      <ScrollTopButton visible={showScrollTop} />
    </div>
  );
}

export default App;
