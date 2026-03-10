import React from "react";
import "./about.css";

import ahi from "/assets/ahi.png";
import arshath from "/assets/clothing6.png";
import askar from "/assets/clothing6.png";
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
            <img src={ahi} alt="AHI" className="profile-img"/>
            <h3>AHI</h3>
            <span className="role">Lead</span>
            <p>
              Leads the team and manages project planning, ensuring every
              product is delivered with quality and performance.
            </p>
          </div>

           <div className="highlight-card">
            <img src={askar} alt="ASKAR" className="profile-img"/>
            <h3>ASKAR</h3>
            <span className="role">Frontend Developer</span>
            <p>
              Creates responsive and modern user interfaces focused on
              performance, usability, and great user experience.
            </p>
          </div>

        
          <div className="highlight-card">
            <img src={arshath} alt="ARSHATH" className="profile-img"/>
            <h3>ARSHATH</h3>
            <span className="role">Backend Developer</span>
            <p>
              Builds secure and scalable APIs using modern backend
              technologies and ensures smooth server performance.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;