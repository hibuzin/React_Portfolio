import React from "react";
import "./services.css";

import { 
  Headset, 
  Smartphone, 
  Globe, 
  Paintbrush, 
  Sparkles, 
  RefreshCw, 
  Bug,
  Zap,
  Layout,
  Server,
} from "lucide-react";

const services = [
  {
    icon: <Headset size={22} />,
    title: "Free Consultation",
    desc: "We offer a free project consultation to understand your requirements, suggest the right tech stack, and provide a clear development roadmap.",
    accent: "#00E5FF",
    tech: ["Planning", "Roadmap", "Tech Stack"],
  },
  {
    icon: <Smartphone size={22} />,
    title: "Mobile Apps",
    desc: "We build cross-platform mobile apps with Flutter and React Native, and also develop native Android applications using Kotlin — delivering fast, scalable, and high-performance mobile experiences.",
    accent: "#00FF88",
    tech: ["Flutter", "React Native", "Kotlin"],
  },
  {
    icon: <Globe size={22} />,
    title: "Web Development",
    desc: "High-performance, responsive websites and web applications built with modern technologies for speed, scalability, and seamless user experience.",
    accent: "#00D4FF",
    tech: ["React.js", "Node.js", "MongoDB"],
  },
  {
    icon: <Zap size={22} />,
    title: "MVP Development",
    desc: "We build products quickly — helping you launch your MVP in the shortest possible time.",
    accent: "#F59E0B",
    tech: ["Fast Launch", "Prototype", "Deployment"],
  },
  {
    icon: <Layout size={22} />,
    title: "UI Integration",
    desc: "Convert Figma designs into pixel-perfect, high-performance applications with clean and scalable implementation.",
    accent: "#818CF8",
    tech: ["Figma", "React.js", "Flutter"],
  },
  {
    icon: <Server size={22} />,
    title: "Backend Development",
    desc: "Scalable APIs and backend systems using Node.js, Python, and MongoDB — built for speed, security, and reliability.",
    accent: "#34D399",
    tech: ["Node.js", "Python", "MongoDB"],
  },
  {
    icon: <Paintbrush size={22} />,
    title: "UI/UX Design",
    desc: "Modern, intuitive user interface and user experience design focused on usability, aesthetics, and conversion.",
    accent: "#FF61DC",
    tech: ["Figma"],
  },
  {
    icon: <Sparkles size={22} />,
    title: "AI Integration",
    desc: "Integrate AI features like chatbots, automation, and intelligent data processing into your applications to enhance functionality.",
    accent: "#FF6B6B",
    tech: ["OpenAI", "Automation", "Chatbots"],
  },
  {
    icon: <RefreshCw size={22} />,
    title: "Migrating",
    desc: "Seamless migration of applications, databases, or platforms with minimal downtime while ensuring data integrity and security.",
    accent: "#FFD93D",
    tech: ["Apps", "Databases", "Platforms"],
  },
  {
    icon: <Bug size={22} />,
    title: "Bug Fixing",
    desc: "Identify, troubleshoot, and resolve application issues efficiently to improve performance, stability, and user experience.",
    accent: "#7B61FF",
    tech: ["Debugging", "Optimization", "Fixes"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="section-header">
        <p className="section-label">WHAT WE DO</p>
        <h2 className="section-title">Our Services</h2>
        <p className="section-sub">
          End-to-end software solutions tailored to your business goals.
        </p>
      </div>

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

            {/* ✅ Bottom tech stack */}
            <div className="service-tech-stack">
              {service.tech.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}