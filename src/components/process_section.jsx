import React from "react";
import "./process.css";

function ProcessSection() {
  return (
    <section id="process" className="process">
      <div className="process-container">
        <h2 className="process-title">Our Process</h2>

        <p className="process-description">
          Our workflow ensures every project is delivered with quality,
          efficiency and clear communication from idea to launch.
        </p>

        <div className="process-steps">

          <div className="step-card">
            <div className="step-number">01</div>
            <h3>Requirement Discussion</h3>
            <p>Understanding client goals, project scope and requirements.</p>
          </div>

          <div className="step-card">
            <div className="step-number">02</div>
            <h3>UI / UX Planning</h3>
            <p>Designing user-friendly interfaces and clear user journeys.</p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>
            <h3>Development</h3>
            <p>Building scalable applications using modern technologies.</p>
          </div>

          <div className="step-card">
            <div className="step-number">04</div>
            <h3>Testing</h3>
            <p>Ensuring performance, stability and bug-free experience.</p>
          </div>

          <div className="step-card">
            <div className="step-number">05</div>
            <h3>Launch</h3>
            <p>Deploying the project and making it live for users.</p>
          </div>

          <div className="step-card">
            <div className="step-number">06</div>
            <h3>Maintenance</h3>
            <p>Continuous improvements, updates and technical support.</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProcessSection;