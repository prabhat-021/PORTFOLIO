import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

const socialIconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: MailOutlineRoundedIcon
};

function HeroSection({ content, onNavClick }) {
  return (
    <section id="home" className="section hero-section">
      <div className="shell-container hero-grid">
        <div className="hero-copy">
          <span className="hero-eyebrow">{content.hero.eyebrow}</span>
          <h1 className="hero-title">{content.hero.title}</h1>
          <p className="hero-description">{content.hero.description}</p>

          <div className="hero-action-row">
            <a
              href="#projects"
              onClick={(event) => onNavClick(event, "projects")}
              className="button button-primary"
            >
              View Projects
              <ArrowOutwardRoundedIcon />
            </a>
            <a
              href={content.resumeFile}
              target="_blank"
              rel="noreferrer"
              download
              className="button button-secondary"
            >
              Download Resume
              <DownloadRoundedIcon />
            </a>
          </div>

          <div className="hero-pill-row">
            {content.hero.highlights.map((item) => (
              <span key={item} className="hero-pill">
                {item}
              </span>
            ))}
          </div>

          <div className="social-row">
            {content.socialLinks.map((link) => {
              const IconComponent = socialIconMap[link.iconKey];

              return (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="social-link"
                  aria-label={link.label}
                >
                  <IconComponent />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-card card-surface">
            <div className="hero-photo-frame">
              <img
                src={content.profileImage}
                alt={content.name}
                className="hero-photo"
              />
            </div>

            <div className="hero-mini-card">
              <span className="mini-card-label">Current Focus</span>
              <strong>{content.currentFocus}</strong>
            </div>
          </div>

          <div className="terminal-card card-surface">
            <div className="terminal-topbar">
              <span />
              <span />
              <span />
            </div>
            <div className="terminal-body">
              {content.hero.terminal.map((line) => (
                <p
                  key={line}
                  className={line.startsWith("$") ? "terminal-line terminal-command" : "terminal-line"}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
