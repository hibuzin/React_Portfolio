import React from "react";
import "./services.css";

import { 
  Headset, 
  Smartphone, 
  Globe, 
  Paintbrush, 
  Sparkles, 
  RefreshCw, 
  Bug 
} from "lucide-react";

const services = [
  {
    icon: <Headset size={22} />,
    title: "Free Consultation",
    desc: "We offer a free project consultation to understand your requirements, suggest the right tech stack, and provide a clear development roadmap.",
    accent: "#00E5FF",
  },

  {
    icon: <Smartphone size={22} />,
    title: "Mobile Apps",
    desc: "Cross-platform Android and iOS mobile applications using Flutter — delivering native performance with a single codebase.",
    accent: "#00FF88",
  },
  {
    icon: <Globe size={22} />,
    title: "Web Development",
    desc: "High-performance, responsive websites and web applications built with modern technologies like Flutter Web, React, and Next.js.",
    accent: "#00D4FF",
  },
  {
    icon: <Globe size={22} />,
    title: "MVP Development",
    desc: "We build Start products quickly, we can deliver your MVP within 1 day",
    accent: "#00D4FF",
  },
  {
    icon: <Globe size={22} />,
    title: "UI Integration",
    desc: "Convert Figma designs to performing apps",
    accent: "#00D4FF",
  },
  {
    icon: <Globe size={22} />,
    title: "Backend Development",
    desc: "Scalable API's using Node.js",
    accent: "#00D4FF",
  },
  {
    icon: <Paintbrush size={22} />,
    title: "UI/UX Design",
    desc: "Modern, intuitive user interface and user experience design focused on usability, aesthetics, and conversion.",
    accent: "#FF61DC",
  },
  {
    icon: <Sparkles size={22} />,
    title: "AI Integration",
    desc: "Integrate AI features like chatbots, automation, and intelligent data processing into your applications to enhance functionality.",
    accent: "#FF6B6B",
  },
  {
    icon: <RefreshCw size={22} />,
    title: "Migrating",
    desc: "Seamless migration of applications, databases, or platforms with minimal downtime while ensuring data integrity and security.",
    accent: "#FFD93D",
  },
  {
    icon: <Bug size={22} />,
    title: "Bug Fixing",
    desc: "Identify, troubleshoot, and resolve application issues efficiently to improve performance, stability, and user experience.",
    accent: "#7B61FF",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <p className="section-label">WHAT WE DO</p>
      <h2 className="section-title">Our Services</h2>
      <p className="section-sub">
        End-to-end software solutions tailored to your business goals.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            style={{ "--accent": service.accent }}
          >
            <div className="icon-box">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>

            <div className="learn-more">
              Learn more →
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}