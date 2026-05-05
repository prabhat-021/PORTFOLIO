import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import SectionHeading from "./SectionHeading";

function ProjectsSection({ content }) {
  return (
    <section id="projects" className="section">
      <div className="shell-container">
        <SectionHeading
          kicker="Projects"
          title="Featured work that looks stronger on a single page"
          description="A selection of projects that demonstrate a focus on clean UI, practical backend work, and overall polish. Each project is built with the MERN stack and highlights different aspects of my capabilities."
        />

        <div className="projects-grid">
          {content.featuredProjects.map((project) => (
            <article key={project.title} className="project-card card-surface">
              <div className="project-media">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <div className="project-head">
                  <div>
                    <span className="project-label">Featured Build</span>
                    <h3>{project.title}</h3>
                  </div>
                </div>

                <p className="project-description">{project.summary}</p>

                <div className="chip-list">
                  {project.stack.map((item) => (
                    <span key={item} className="stack-chip">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      <GitHubIcon />
                      <span>Code</span>
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      <LaunchRoundedIcon />
                      <span>Live Preview</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
