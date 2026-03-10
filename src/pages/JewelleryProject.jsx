import React, { useState } from "react";

import img1 from "/assets/jewellery1.png";
import img2 from "/assets/jewellery2.png";
import img3 from "/assets/jewellery3.png";
import img4 from "/assets/jewellery4.png";
import img5 from "/assets/jewellery5.png";
import img6 from "/assets/jewellery6.png";
import img7 from "/assets/jewellery7.png";
import img8 from "/assets/jewellery8.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];
const tech = ["UI/UX Design", "React", "E-Commerce", "Luxury Brand"];

function WindowsMockup({ src, index, hovered, onEnter, onLeave }) {
  const isHovered = hovered === index;

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        transition: "transform 0.5s cubic-bezier(0.23,1,0.32,1)",
        transform: isHovered ? "translateY(-12px) scale(1.02)" : "translateY(0) scale(1)",
        filter: isHovered
          ? "drop-shadow(0 24px 48px rgba(10,132,255,0.25))"
          : "drop-shadow(0 12px 28px rgba(0,0,0,0.5))",
      }}
    >
      {/* Window frame */}
      <div style={{
        borderRadius: "8px",
        overflow: "hidden",
        border: isHovered
          ? "1px solid rgba(10,132,255,0.45)"
          : "1px solid rgba(255,255,255,0.08)",
        background: "#1a1f28",
        transition: "border-color 0.4s ease",
      }}>

        {/* Windows title bar */}
        <div style={{
          background: "linear-gradient(180deg, #1e2330 0%, #181d28 100%)",
          padding: "0 0 0 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "36px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          userSelect: "none",
        }}>
          {/* Left — app icon + title */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {/* Favicon */}
            <div style={{
              width: "14px", height: "14px",
              borderRadius: "3px",
              background: "linear-gradient(135deg, #0A84FF, #0055cc)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#fff", opacity: 0.9 }} />
            </div>
            <span style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.55)",
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: "0.01em",
            }}>
              luxurygold.com — Chrome
            </span>
          </div>

          {/* Right — Windows control buttons */}
          <div style={{ display: "flex", height: "100%" }}>
            {/* Minimize */}
            <div style={{
              width: "46px", height: "100%",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.15s",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <div style={{ width: "10px", height: "1.5px", background: "rgba(255,255,255,0.5)", borderRadius: "1px" }} />
            </div>
            {/* Maximize */}
            <div style={{
              width: "46px", height: "100%",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <div style={{
                width: "10px", height: "10px",
                border: "1.5px solid rgba(255,255,255,0.5)",
                borderRadius: "2px",
              }} />
            </div>
            {/* Close */}
            <div style={{
              width: "46px", height: "100%",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer",
              borderRadius: "0 8px 0 0",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "#e81123"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1 }}>✕</span>
            </div>
          </div>
        </div>

        {/* Browser address bar */}
        <div style={{
          background: "#161b24",
          padding: "6px 14px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}>
          {/* Nav arrows */}
          {["‹", "›"].map((a, i) => (
            <span key={i} style={{ fontSize: "15px", color: "rgba(255,255,255,0.2)", cursor: "pointer", lineHeight: 1 }}>{a}</span>
          ))}
          <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.15)", cursor: "pointer" }}>↻</span>

          {/* URL bar */}
          <div style={{
            flex: 1,
            background: "rgba(255,255,255,0.05)",
            borderRadius: "20px",
            padding: "4px 14px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            border: "1px solid rgba(255,255,255,0.06)",
          }}>
            <span style={{ fontSize: "10px", color: "#28c840", opacity: 0.8 }}>🔒</span>
            <span style={{
              fontSize: "11.5px",
              color: "rgba(255,255,255,0.3)",
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: "0.01em",
            }}>
              https://luxurygold.com
            </span>
          </div>

          {/* Right icons */}
          <div style={{ display: "flex", gap: "6px" }}>
            {[1, 2].map(i => (
              <div key={i} style={{
                width: "18px", height: "18px",
                borderRadius: "4px",
                background: "rgba(255,255,255,0.05)",
              }} />
            ))}
          </div>
        </div>

        {/* Screenshot */}
        <div style={{ overflow: "hidden", position: "relative" }}>
          <img
            src={src}
            alt={`jewellery screen ${index + 1}`}
            style={{
              width: "100%",
              display: "block",
              transition: "transform 0.6s cubic-bezier(0.23,1,0.32,1)",
              transform: isHovered ? "scale(1.03)" : "scale(1)",
            }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, transparent 40%)",
            pointerEvents: "none",
          }} />
        </div>

      </div>
    </div>
  );
}

function JewelleryProject() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&display=swap');

        .jp-wrap {
          background: #080c10;
          min-height: 100vh;
          color: #e8edf2;
          font-family: 'Outfit', sans-serif;
          overflow-x: hidden;
        }
        .jp-hero {
          position: relative;
          padding: 110px 8% 80px;
          background: linear-gradient(160deg, #0d1520 0%, #080c10 65%);
          overflow: hidden;
        }
        .jp-hero::before {
          content: '';
          position: absolute;
          top: -100px; right: -100px;
          width: 560px; height: 560px;
          background: radial-gradient(circle, rgba(10,132,255,0.09) 0%, transparent 70%);
          pointer-events: none;
        }
        .jp-hero::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(10,132,255,0.3), transparent);
        }
        .jp-eyebrow {
          display: inline-flex; align-items: center; gap: 12px;
          font-size: 11px; letter-spacing: 0.28em; text-transform: uppercase;
          color: #0A84FF; font-weight: 500; margin-bottom: 28px;
        }
        .jp-eyebrow::before { content: ''; width: 32px; height: 1px; background: #0A84FF; }
        .jp-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(56px, 10vw, 118px);
          line-height: 0.9; letter-spacing: 0.02em; margin-bottom: 36px;
        }
        .jp-title span {
          display: block;
          background: linear-gradient(90deg, #ffffff 40%, rgba(10,132,255,0.55));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .jp-meta { display: flex; gap: 56px; flex-wrap: wrap; margin-bottom: 44px; align-items: flex-start; }
        .jp-desc { max-width: 500px; font-size: 15px; line-height: 1.9; color: #5d7287; font-weight: 300; }
        .jp-info { display: flex; flex-direction: column; gap: 18px; }
        .jp-info-item label { display: block; font-size: 9px; letter-spacing: 0.25em; text-transform: uppercase; color: #2e4055; margin-bottom: 4px; }
        .jp-info-item span { font-size: 13px; color: #7a95aa; }
        .jp-tags { display: flex; gap: 10px; flex-wrap: wrap; }
        .jp-tag {
          font-size: 11px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;
          padding: 7px 18px; border-radius: 4px;
          border: 1px solid rgba(10,132,255,0.22); color: #0A84FF; background: rgba(10,132,255,0.05);
        }
        .jp-gallery-wrap {
          padding: 90px 6% 110px;
          background: radial-gradient(ellipse at 50% 0%, rgba(10,132,255,0.04) 0%, transparent 60%);
        }
        .jp-gallery-label {
          display: flex; align-items: center; gap: 16px;
          font-size: 10px; letter-spacing: 0.32em; text-transform: uppercase;
          color: #2e4055; margin-bottom: 56px;
        }
        .jp-gallery-label::before { content: ''; width: 20px; height: 1px; background: rgba(10,132,255,0.3); }
        .jp-gallery-label::after { content: ''; flex: 1; height: 1px; background: linear-gradient(90deg, rgba(10,132,255,0.15), transparent); }
        .jp-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }
        @media (max-width: 900px) {
          .jp-grid { grid-template-columns: 1fr; }
          .jp-hero { padding: 80px 6% 60px; }
          .jp-gallery-wrap { padding: 56px 6% 80px; }
        }
        @media (max-width: 560px) {
          .jp-hero { padding: 72px 5% 48px; }
          .jp-gallery-wrap { padding: 40px 5% 64px; }
          .jp-meta { flex-direction: column; gap: 28px; }
        }
      `}</style>

      <div className="jp-wrap">
        <div className="jp-hero">
          <div className="jp-eyebrow">E-Commerce · Jewellery</div>
          <h1 className="jp-title">
            <span>Luxury Gold</span>
            <span>Jewellery</span>
          </h1>
          <div className="jp-meta">
            <p className="jp-desc">
              A modern jewellery e-commerce website designed with a premium UI.
              The platform allows users to browse luxury gold collections, explore
              product details, and enjoy a smooth shopping experience.
            </p>
            <div className="jp-info">
              <div className="jp-info-item"><label>Category</label><span>E-Commerce</span></div>
              <div className="jp-info-item"><label>Year</label><span>2024</span></div>
              <div className="jp-info-item"><label>Role</label><span>UI/UX & Dev</span></div>
              <div className="jp-info-item"><label>Platform</label><span>Web</span></div>
            </div>
          </div>
          <div className="jp-tags">
            {tech.map(t => <span key={t} className="jp-tag">{t}</span>)}
          </div>
        </div>

        <div className="jp-gallery-wrap">
          <div className="jp-gallery-label">Project Screens</div>
          <div className="jp-grid">
            {images.map((img, i) => (
              <WindowsMockup
                key={i}
                src={img}
                index={i}
                hovered={hovered}
                onEnter={() => setHovered(i)}
                onLeave={() => setHovered(null)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default JewelleryProject;