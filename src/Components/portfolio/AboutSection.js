import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import SectionHeading from "./SectionHeading";

const capabilityIconMap = {
  frontend: DevicesRoundedIcon,
  backend: StorageRoundedIcon,
  craft: CodeRoundedIcon
};

function AboutSection({ content }) {
  return (
    <section id="about" className="section">
      <div className="shell-container">
        <SectionHeading
          kicker="About"
          title={content.about.title}
          description={content.about.description}
        />

        <div className="about-grid">
          <div className="about-media card-surface">
            <img
              src={content.aboutImage}
              alt={`${content.name} workspace`}
              className="about-image"
            />
          </div>

          <div className="about-content card-surface">
            <p className="about-lead">{content.about.lead}</p>

            <div className="quick-facts-grid">
              {content.quickFacts.map((fact) => (
                <div key={fact.label} className="fact-card">
                  <span className="fact-label">{fact.label}</span>
                  <strong className="fact-value">{fact.value}</strong>
                </div>
              ))}
            </div>

            <div className="capability-grid">
              {content.capabilities.map((capability) => {
                const IconComponent = capabilityIconMap[capability.iconKey];

                return (
                  <article key={capability.title} className="capability-card">
                    <div className="capability-icon">
                      <IconComponent />
                    </div>
                    <div>
                      <h3>{capability.title}</h3>
                      <p>{capability.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
