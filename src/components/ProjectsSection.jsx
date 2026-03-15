import React from "react";
import "./projects.css";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    category: "E-commerce",
    title: "LUXURY GOLD",
    slug: "jewellery",
    desc: "Premium online jewellery platform showcasing gold, diamond, and bridal collections with secure checkout and seamless shopping experience.",
    tech: ["React", "Node.js", "MongoDB", "Render"],
    accent: "#FACC15",
  },
  {
    category: "E-commerce",
    title: "PATRO CLOTHING",
    slug: "clothing",
    desc: "Premium fashion shopping app offering curated collections, seasonal drops, size filters, and smooth payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Render"],
    accent: "#A855F7",
  },

];

function ProjectsSection() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <p className="projects-label">OUR WORK</p>
        <h2 className="projects-title">Our Recent Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => navigate(`/project/${project.slug}`)}
            className={`project-card ${project.fullWidth ? "full-width" : ""}`}
            style={{ "--accent": project.accent }}
          >
            <span className="project-category">{project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;