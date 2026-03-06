import React from "react";
import "./about.css";

function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-title">About Us</h2>

        <p className="about-description">
          We are a passionate team of 3 developers focused on building
          high-performance web and mobile applications. Our mission is to
          transform ideas into scalable digital products using modern
          technologies and clean design principles.
        </p>

        <div className="about-highlights">
          <div className="highlight-card">
            <h3>🚀 Innovation</h3>
            <p>We build modern, scalable and future-ready applications.</p>
          </div>

          <div className="highlight-card">
            <h3>⚡ Performance</h3>
            <p>Optimized, fast and smooth user experiences.</p>
          </div>

          <div className="highlight-card">
            <h3>🤝 Collaboration</h3>
            <p>Transparent communication and client-focused approach.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;