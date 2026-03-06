import React from "react";
import "./tech.css";

import { FaPython, FaNodeJs, FaAws, FaDocker, FaReact } from "react-icons/fa";
import { SiFlutter, SiMongodb, SiFirebase } from "react-icons/si";

const techStack = [
  { name: "Flutter",   role: "Mobile / Web",   icon: <SiFlutter  size={60} color="#46d1fd" /> },
  { name: "Python",    role: "Backend",         icon: <FaPython   size={60} color="#ffd43b" /> },
  { name: "Node.js",   role: "Backend",         icon: <FaNodeJs   size={60} color="#68a063" /> },
  { name: "AWS",       role: "Cloud",           icon: <FaAws      size={60} color="#ff9900" /> },
  { name: "Docker",    role: "DevOps",          icon: <FaDocker   size={60} color="#2496ed" /> },
  { name: "React",     role: "Frontend",        icon: <FaReact    size={60} color="#61dafb" /> },
  { name: "MongoDB",   role: "Database",        icon: <SiMongodb  size={60} color="#4db33d" /> },
  { name: "Firebase",  role: "Backend / Auth",  icon: <SiFirebase size={60} color="#ffca28" /> },
];

// card min-width (130) + gap (80) = 210px per card
const CARD_WIDTH = 130;
const GAP = 80;
const PER_ITEM = CARD_WIDTH + GAP; // 210px
const SCROLL_DISTANCE = PER_ITEM * techStack.length; // 210 * 8 = 1680px

function TechSection() {
  return (
    <section id="tech" className="tech">
      <h2 className="tech-title">Technologies We Master</h2>

      <div className="tech-slider">
        {/* Pixel-perfect keyframe — no drift, no stutter */}
        <style>{`
          @keyframes scroll {
            0%   { transform: translateX(0px); }
            100% { transform: translateX(-${SCROLL_DISTANCE}px); }
          }
        `}</style>

        <div className="tech-track">
          {techStack.map((tech, i) => (
            <div className="tech-card" key={`a-${i}`}>
              {tech.icon}
              <h4>{tech.name}</h4>
              <p>{tech.role}</p>
            </div>
          ))}
          {techStack.map((tech, i) => (
            <div className="tech-card" key={`b-${i}`}>
              {tech.icon}
              <h4>{tech.name}</h4>
              <p>{tech.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechSection;