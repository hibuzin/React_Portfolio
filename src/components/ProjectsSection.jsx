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
  {
  category: "Real Estate",
  title: "LAND",
  slug: "land",
  desc: "Smart property sale platform enabling buyers to discover verified listings, explore virtual tours, compare pricing insights, and connect directly with agents.",
  tech: ["Flutter", "Node.js", "MongoDB", "Render"],
  accent: "#22C55E"
}
];

function ProjectsSection() {

  const navigate = useNavigate();

  return (
    <section id="projects" className="projects">

      <h2 className="section-title">Our Recent Projects</h2>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div
            key={index}
            onClick={() => navigate(`/project/${project.slug}`)}
            className={`project-card ${project.fullWidth ? "full-width" : ""}`}
            style={{ borderColor: project.accent, cursor: "pointer" }}
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