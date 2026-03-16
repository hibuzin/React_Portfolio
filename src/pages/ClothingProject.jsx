import React, { useState } from "react";

const images = [
  "/assets/clothing1.png",
  "/assets/clothing2.png",
  "/assets/clothing3.png",
  "/assets/clothing4.png",
  "/assets/clothing5.png",
  "/assets/clothing6.png",
];

const tech = ["React", "Node.js", "MongoDB", "Render"];

function PhoneMockup({ src, index, hovered, onEnter, onLeave }) {
  const isHovered = hovered === index;

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        display: "flex",
        justifyContent: "center",
        transition: "transform 0.5s cubic-bezier(0.23,1,0.32,1)",
        transform: isHovered ? "translateY(-16px) scale(1.03)" : "translateY(0) scale(1)",
        width: "100%",
      }}
      className="cp-phone-wrap"
    >
      <div
        style={{
          position: "relative",
          filter: isHovered
            ? "drop-shadow(0 30px 60px rgba(10,132,255,0.3))"
            : "drop-shadow(0 16px 32px rgba(0,0,0,0.5))",
          transition: "filter 0.5s ease",
        }}
      >
        <div
          className="cp-phone-shell"
          style={{
            width: "var(--phone-width, 240px)",
            maxWidth: "100%",
            borderRadius: "36px",
            background: "linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 50%, #111111 100%)",
            padding: "10px 10px 16px",
            boxShadow: isHovered
              ? "inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1.5px rgba(10,132,255,0.55), 0 24px 60px rgba(10,132,255,0.2)"
              : "inset 0 1px 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(255,255,255,0.06), 0 20px 40px rgba(0,0,0,0.6)",
            position: "relative",
            transition: "box-shadow 0.4s ease",
          }}
        >
          {/* Left side buttons */}
          {[75, 122].map((top, i) => (
            <div
              key={i}
              className="cp-side-btn left"
              style={{
                position: "absolute",
                left: "-4px",
                top: `${top}px`,
                width: "4px",
                height: "42px",
                background: "linear-gradient(180deg, #3a3a3a, #222222)",
                borderRadius: "3px 0 0 3px",
                boxShadow: "inset 1px 0 1px rgba(255,255,255,0.08)",
              }}
            />
          ))}

          {/* Right side button */}
          <div
            className="cp-side-btn right"
            style={{
              position: "absolute",
              right: "-4px",
              top: "92px",
              width: "4px",
              height: "54px",
              background: "linear-gradient(180deg, #3a3a3a, #222222)",
              borderRadius: "0 3px 3px 0",
              boxShadow: "inset -1px 0 1px rgba(255,255,255,0.08)",
            }}
          />

          <div
            className="cp-screen-wrap"
            style={{
              borderRadius: "26px",
              overflow: "hidden",
              background: "#000",
              position: "relative",
              boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.2)",
            }}
          >
            {/* Top camera area */}
            <div
              className="cp-top-bar"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "28px",
                background: "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, transparent 100%)",
                zIndex: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "4px",
              }}
            >
              <div
                className="cp-camera"
                style={{
                  width: "11px",
                  height: "11px",
                  background: "#0a0a0a",
                  borderRadius: "50%",
                  boxShadow: "0 0 0 1.5px rgba(255,255,255,0.12), inset 0 0 3px rgba(255,255,255,0.05)",
                }}
              />
            </div>

            {/* Screen image */}
            <img
              src={src}
              alt={`clothing screen ${index + 1}`}
              style={{
                width: "100%",
                display: "block",
                transition: "transform 0.6s cubic-bezier(0.23,1,0.32,1)",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                imageRendering: "auto",
                objectFit: "cover",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            />

            {/* Glass shine - reduced for better clarity */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, rgba(255,255,255,0.025) 0%, transparent 35%)",
                pointerEvents: "none",
                zIndex: 4,
              }}
            />

            {/* Bottom nav icons */}
            <div
              className="cp-bottom-bar"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "22px",
                background: "linear-gradient(0deg, rgba(0,0,0,0.55) 0%, transparent 100%)",
                zIndex: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "18px",
                paddingBottom: "4px",
              }}
            >
              {["‹", "●", "▪"].map((icon, i) => (
                <span
                  key={i}
                  className="cp-bottom-icon"
                  style={{
                    fontSize: i === 0 ? "14px" : i === 1 ? "8px" : "7px",
                    color: "rgba(255,255,255,0.35)",
                    lineHeight: 1,
                  }}
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ClothingProject() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&display=swap');

        .cp-wrap {
          background: #080c10;
          min-height: 100vh;
          color: #e8edf2;
          font-family: 'Outfit', sans-serif;
          overflow-x: hidden;
          --phone-width: 240px;
        }

        .cp-hero {
          position: relative;
          padding: 110px 8% 80px;
          background: linear-gradient(160deg, #0d1520 0%, #080c10 65%);
          overflow: hidden;
        }

        .cp-hero::before {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 560px;
          height: 560px;
          background: radial-gradient(circle, rgba(10,132,255,0.09) 0%, transparent 70%);
          pointer-events: none;
        }

        .cp-hero::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(10,132,255,0.3), transparent);
        }

        .cp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #0A84FF;
          font-weight: 500;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }

        .cp-eyebrow::before {
          content: '';
          width: 32px;
          height: 1px;
          background: #0A84FF;
        }

        .cp-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(42px, 10vw, 118px);
          line-height: 0.9;
          letter-spacing: 0.02em;
          margin-bottom: 36px;
        }

        .cp-title span {
          display: block;
          background: linear-gradient(90deg, #ffffff 40%, rgba(10,132,255,0.55));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cp-meta {
          display: flex;
          gap: 56px;
          flex-wrap: wrap;
          margin-bottom: 44px;
          align-items: flex-start;
        }

        .cp-desc {
          max-width: 500px;
          font-size: 15px;
          line-height: 1.9;
          color: #5d7287;
          font-weight: 300;
        }

        .cp-info {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .cp-tags {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .cp-tag {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 7px 18px;
          border-radius: 4px;
          border: 1px solid rgba(10,132,255,0.22);
          color: #0A84FF;
          background: rgba(10,132,255,0.05);
        }

        .cp-gallery-wrap {
          padding: 90px 6% 110px;
          background: radial-gradient(ellipse at 50% 0%, rgba(10,132,255,0.04) 0%, transparent 60%);
        }

        .cp-gallery-label {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 10px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #2e4055;
          margin-bottom: 64px;
          flex-wrap: wrap;
        }

        .cp-gallery-label::before {
          content: '';
          width: 20px;
          height: 1px;
          background: rgba(10,132,255,0.3);
        }

        .cp-gallery-label::after {
          content: '';
          flex: 1;
          min-width: 40px;
          height: 1px;
          background: linear-gradient(90deg, rgba(10,132,255,0.15), transparent);
        }

        /* DESKTOP */
        .cp-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 48px 28px;
          justify-items: center;
          align-items: start;
          max-width: 920px;
          margin: 0 auto;
        }

        /* TABLET */
        @media (max-width: 1024px) {
          .cp-wrap {
            --phone-width: 210px;
          }

          .cp-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            max-width: 620px;
            gap: 36px 18px;
          }

          .cp-hero {
            padding: 88px 6% 64px;
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .cp-wrap {
            --phone-width: 112px;
          }

          .cp-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 14px 8px;
            max-width: 100%;
          }

          .cp-hero {
            padding: 72px 5% 48px;
          }

          .cp-gallery-wrap {
            padding: 56px 4% 72px;
          }

          .cp-meta {
            flex-direction: column;
            gap: 28px;
          }

          .cp-title {
            margin-bottom: 28px;
          }

          .cp-gallery-label {
            margin-bottom: 28px;
          }

          .cp-desc {
            font-size: 14px;
            line-height: 1.8;
          }

          /* Mobile compact phone frame */
          .cp-phone-wrap {
            transform: none !important;
          }

          .cp-phone-shell {
            border-radius: 22px !important;
            padding: 4px 4px 6px !important;
          }

          .cp-screen-wrap {
            border-radius: 18px !important;
          }

          .cp-side-btn {
            display: none !important;
          }

          .cp-top-bar {
            height: 12px !important;
            padding-top: 1px !important;
            background: linear-gradient(180deg, rgba(0,0,0,0.22) 0%, transparent 100%) !important;
          }

          .cp-camera {
            width: 5px !important;
            height: 5px !important;
            box-shadow: 0 0 0 1px rgba(255,255,255,0.06), inset 0 0 2px rgba(255,255,255,0.03) !important;
          }

          .cp-bottom-bar {
            height: 10px !important;
            gap: 7px !important;
            padding-bottom: 1px !important;
            background: linear-gradient(0deg, rgba(0,0,0,0.18) 0%, transparent 100%) !important;
          }

          .cp-bottom-icon {
            font-size: 5px !important;
            opacity: 0.65;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 480px) {
          .cp-wrap {
            --phone-width: 96px;
          }

          .cp-title {
            font-size: clamp(36px, 14vw, 54px);
          }

          .cp-tag {
            font-size: 10px;
            padding: 6px 14px;
          }

          .cp-grid {
            gap: 12px 6px;
          }

          .cp-phone-shell {
            border-radius: 18px !important;
            padding: 3px 3px 5px !important;
          }

          .cp-screen-wrap {
            border-radius: 15px !important;
          }
        }

        /* VERY SMALL MOBILE */
        @media (max-width: 380px) {
          .cp-wrap {
            --phone-width: 86px;
          }

          .cp-grid {
            gap: 10px 4px;
          }

          .cp-tag {
            font-size: 9px;
            padding: 5px 10px;
          }

          .cp-phone-shell {
            padding: 3px 3px 4px !important;
          }
        }
      `}</style>

      <div className="cp-wrap">
        <div className="cp-hero">
          <div className="cp-eyebrow">E-Commerce · Fashion</div>

          <h1 className="cp-title">
            <span>Patro</span>
            <span>Clothing</span>
          </h1>

          <div className="cp-meta">
            <p className="cp-desc">
              A modern fashion e-commerce platform designed to provide a smooth
              and stylish online shopping experience. Customers can explore curated
              collections, filter by category and size, and securely complete
              purchases through a clean checkout process.
            </p>

            <div className="cp-info"></div>
          </div>

          <div className="cp-tags">
            {tech.map((t) => (
              <span key={t} className="cp-tag">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="cp-gallery-wrap">
          <div className="cp-gallery-label">Project Screens</div>

          <div className="cp-grid">
            {images.map((img, i) => (
              <PhoneMockup
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