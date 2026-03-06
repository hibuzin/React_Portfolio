import React, { useState } from "react";

function ClothingProject() {
  const [hovered, setHovered] = useState(null);

  const images = [
    "/assets/clothing1.png",
    "/assets/clothing2.png",
    "/assets/clothing3.png",
    "/assets/clothing4.png",
    "/assets/clothing5.png",
    "/assets/clothing6.png",
  ];

  const tech = ["React", "Node.js", "MongoDB", "Render"];

  return (
    <div style={{
      backgroundColor: "#0e161f",
      minHeight: "100vh",
      color: "white",
      fontFamily: "'Exo 2', sans-serif",
      border: "none",
      outline: "none",
    }}>

      {/* HERO SECTION */}
      <div style={{
        padding: "100px 80px 60px",
        border: "none",
        background: "linear-gradient(135deg, #0e161f 60%, #0a1628 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background glow */}
        <div style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(10,132,255,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <span style={{
          fontSize: "12px",
          letterSpacing: "3px",
          color: "#0A84FF",
          fontWeight: 600,
          textTransform: "uppercase",
        }}>
          E-Commerce · Fashion
        </span>

        <h1 style={{
          fontSize: "clamp(36px, 6vw, 72px)",
          fontWeight: 800,
          marginTop: "16px",
          lineHeight: 1.1,
          letterSpacing: "-1px",
          background: "linear-gradient(90deg, #ffffff 40%, #0A84FF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          PATRO CLOTHING
        </h1>

        <p style={{
          marginTop: "24px",
          maxWidth: "600px",
          color: "#8899aa",
          fontSize: "16px",
          lineHeight: 1.8,
        }}>
          A modern fashion e-commerce platform designed to provide a smooth and
          stylish online shopping experience. Customers can explore curated
          collections, filter by category and size, and securely complete
          purchases through a clean checkout process.
        </p>

        {/* Tech Stack */}
        <div style={{ display: "flex", gap: "12px", marginTop: "32px", flexWrap: "wrap" }}>
          {tech.map((t) => (
            <span key={t} style={{
              padding: "6px 16px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "1px",
              border: "1px solid rgba(10,132,255,0.4)",
              color: "#0A84FF",
              background: "rgba(10,132,255,0.08)",
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* IMAGE GALLERY */}
      <div style={{ padding: "60px 80px 100px", border: "none" }}>
        <p style={{
          fontSize: "11px",
          letterSpacing: "3px",
          color: "#0A84FF",
          fontWeight: 600,
          marginBottom: "32px",
        }}>
          PROJECT SCREENS
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}>
          {images.map((img, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                backgroundColor: "#0e161f",
                border: hovered === index
                  ? "1px solid rgba(10,132,255,0.6)"
                  : "1px solid rgba(10,132,255,0.1)",
                transition: "all 0.3s ease",
                transform: hovered === index ? "translateY(-4px)" : "translateY(0)",
                boxShadow: hovered === index
                  ? "0 12px 40px rgba(10,132,255,0.2)"
                  : "none",
              }}
            >
              <img
                src={img}
                alt={`clothing screen ${index + 1}`}
                style={{
                  width: "100%",
                  display: "block",
                  verticalAlign: "bottom",
                  transition: "transform 0.3s ease",
                  transform: hovered === index ? "scale(1.03)" : "scale(1)",
                }}
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default ClothingProject;