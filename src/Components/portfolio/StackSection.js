import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import SectionHeading from "./SectionHeading";

const capabilityIconMap = {
  frontend: DevicesRoundedIcon,
  backend: StorageRoundedIcon,
  tools: TerminalRoundedIcon
};

function StackSection({ content }) {
  return (
    <section id="stack" className="section">
      <div className="shell-container">
        <SectionHeading
          kicker="Stack"
          title="A cleaner, more focused way to show what I build with"
          description="Instead of splitting skills across separate pages, the stack is grouped into practical buckets so recruiters and clients can scan it quickly."
        />

        <div className="stack-grid">
          {content.stackGroups.map((group) => {
            const IconComponent = capabilityIconMap[group.iconKey];

            return (
              <article key={group.title} className="stack-card card-surface">
                <div className="stack-card-head">
                  <div className="stack-icon">
                    <IconComponent />
                  </div>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.caption}</p>
                  </div>
                </div>

                <div className="chip-list">
                  {group.items.map((item) => (
                    <span key={item} className="stack-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="metrics-grid">
          {content.metrics.map((metric) => (
            <div key={metric.label} className="metric-card card-surface">
              <strong className="metric-value">{metric.value}</strong>
              <span className="metric-label">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StackSection;
