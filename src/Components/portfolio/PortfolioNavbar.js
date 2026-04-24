import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

function PortfolioNavbar({
  activeSection,
  content,
  isMenuOpen,
  isScrolled,
  navItems,
  onNavClick,
  onToggleMenu
}) {
  return (
    <header className={`site-nav ${isScrolled ? "site-nav-scrolled" : ""}`}>
      <div className="shell-container nav-inner">
        <a
          className="brand"
          href="#home"
          onClick={(event) => onNavClick(event, "home")}
        >
          <img src={content.logo} alt={content.name} className="brand-logo" />
          <div>
            <p className="brand-name">{content.name}</p>
            <p className="brand-role">{content.role}</p>
          </div>
        </a>

        <nav className={`nav-links ${isMenuOpen ? "nav-links-open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? "nav-link-active" : ""}`}
              onClick={(event) => onNavClick(event, item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            href="#contact"
            onClick={(event) => onNavClick(event, "contact")}
            className="button button-primary button-small"
          >
            Start a Conversation
          </a>
          <button
            type="button"
            className="nav-toggle"
            onClick={onToggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default PortfolioNavbar;
