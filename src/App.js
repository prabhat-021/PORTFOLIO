import { useEffect, useState } from "react";
import "./pages/styles.css";
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: 0.15
      }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (event, sectionId) => {
    event.preventDefault();
    setIsMenuOpen(false);

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
