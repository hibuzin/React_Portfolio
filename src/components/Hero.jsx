import React from "react";
import {
  FaAndroid, FaJava, FaWindows, FaFigma, FaStripe,
  FaPython, FaAws, FaReact, FaNodeJs, FaDocker,
} from "react-icons/fa";
import {
  SiFlutter, SiKotlin, SiCloudinary, SiRender, SiMongodb, SiFirebase,
} from "react-icons/si";

const outerTechIcons = [
  { icon: <SiFlutter />, label: "Flutter", color: "#47C5FB" },
  { icon: <SiKotlin />, label: "Kotlin", color: "#7F52FF" },
  { icon: <FaAndroid />, label: "Android", color: "#3DDC84" },
  { icon: <FaJava />, label: "Java", color: "#F89820" },
  { icon: <FaWindows />, label: "Windows", color: "#00A4EF" },
  { icon: <SiCloudinary />, label: "Cloudinary", color: "#3448C5" },
  { icon: <SiRender />, label: "Render", color: "#46E3B7" },
  { icon: <FaFigma />, label: "Figma", color: "#F24E1E" },
  { icon: <FaStripe />, label: "Stripe", color: "#635BFF" },
  { icon: <FaPython />, label: "Python", color: "#3776AB" },
  { icon: <FaAws />, label: "AWS", color: "#FF9900" },
];

const innerTechIcons = [
  { icon: <FaReact />, label: "React", color: "#61DAFB" },
  { icon: <SiMongodb />, label: "MongoDB", color: "#47A248" },
  { icon: <FaNodeJs />, label: "Node.js", color: "#68A063" },
  { icon: <FaDocker />, label: "Docker", color: "#2496ED" },
  { icon: <SiFirebase />, label: "Firebase", color: "#FFCA28" },
];

const OUTER_RADIUS = 220;
const INNER_RADIUS = 145;
const OUTER_COUNT = outerTechIcons.length;
const INNER_COUNT = innerTechIcons.length;

function makeKeyframe(name, startDeg, radius, reverse = false) {
  const steps = 60;
  let frames = "";
  for (let i = 0; i <= steps; i++) {
    const pct = (i / steps) * 100;
    const angleDeg = reverse
      ? startDeg - (i / steps) * 360
      : startDeg + (i / steps) * 360;
    const angleRad = (angleDeg * Math.PI) / 180;
    const x = radius * Math.cos(angleRad);
    const y = radius * Math.sin(angleRad);
    frames += `  ${pct.toFixed(1)}% { transform: translate(${x.toFixed(2)}px, ${y.toFixed(2)}px); }\n`;
  }
  return `@keyframes ${name} {\n${frames}}\n`;
}

/* Desktop keyframes use original radii */
let outerOrbitCSS = "";
outerTechIcons.forEach((_, i) => {
  const startDeg = (360 / OUTER_COUNT) * i;
  outerOrbitCSS += makeKeyframe(`outer_orbit_${i}`, startDeg, OUTER_RADIUS, false);
});

let innerOrbitCSS = "";
innerTechIcons.forEach((_, i) => {
  const startDeg = (360 / INNER_COUNT) * i;
  innerOrbitCSS += makeKeyframe(`inner_orbit_${i}`, startDeg, INNER_RADIUS, true);
});

/* Mobile keyframes — smaller radii so full circle fits on screen */
const MOB_OUTER_RADIUS = 120;
const MOB_INNER_RADIUS = 72;

let outerOrbitMobCSS = "";
outerTechIcons.forEach((_, i) => {
  const startDeg = (360 / OUTER_COUNT) * i;
  outerOrbitMobCSS += makeKeyframe(`outer_orbit_mob_${i}`, startDeg, MOB_OUTER_RADIUS, false);
});

let innerOrbitMobCSS = "";
innerTechIcons.forEach((_, i) => {
  const startDeg = (360 / INNER_COUNT) * i;
  innerOrbitMobCSS += makeKeyframe(`inner_orbit_mob_${i}`, startDeg, MOB_INNER_RADIUS, true);
});

const Hero = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 15px 72px 50px;
          background: #0A0E1A;
          color: white;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -120px; left: -80px;
          width: 480px; height: 480px;
          background: radial-gradient(circle, rgba(2,172,232,0.18) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: blobFloat 8s ease-in-out infinite;
        }

        .hero::after {
          content: '';
          position: absolute;
          bottom: -100px; right: 10%;
          width: 360px; height: 360px;
          background: radial-gradient(circle, rgba(100,80,255,0.14) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: blobFloat 10s ease-in-out infinite reverse;
        }

        @keyframes blobFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50%       { transform: translateY(-30px) scale(1.05); }
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── LEFT ── */
        .hero-left {
          flex: 1;
          max-width: 520px;
          position: relative;
          z-index: 2;
          animation: fadeSlideUp 0.9s ease both;
          margin-top: -100px;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(2,172,232,0.1);
          border: 1px solid rgba(2,172,232,0.3);
          border-radius: 999px;
          padding: 8px 14px;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 1.5px;
          color: #02ACE8;
          text-transform: uppercase;
          margin-bottom: 30px;
        }

        .hero-tag::before {
          content: '';
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #02ACE8;
          animation: pulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.75); }
        }

        .hero-title {
          font-family: "Montserrat", sans-serif;
          font-size: 20px;
          line-height: 1.1;
          font-weight: 600;
          margin-bottom: 18px;
        }

        .hero-desc {
          color: #8A9BBE;
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 28px;
          max-width: 480px;
        }

        .hero-buttons { display: flex; gap: 16px; flex-wrap: wrap; }

        .btn-primary {
          background: linear-gradient(135deg, #02ACE8, #7C6EFA);
          border: none;
          padding: 15px 30px;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          color: white;
          font-size: 13px;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-family: 'DM Sans', sans-serif;
          transition: transform .18s, box-shadow .18s;
          box-shadow: 0 8px 28px rgba(2,172,232,0.28);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 36px rgba(2,172,232,0.4);
        }

        .btn-outline {
          background: transparent;
          border: 1.5px solid rgba(255,255,255,0.15);
          padding: 15px 30px;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          color: #B4C4D8;
          text-decoration: none;
          font-size: 13px;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-family: 'DM Sans', sans-serif;
          transition: border-color .18s, color .18s, transform .18s;
          backdrop-filter: blur(6px);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .btn-outline:hover {
          border-color: #02ACE8;
          color: #E8F4FF;
          transform: translateY(-3px);
        }

        /* ── RIGHT ── */
        .hero-right {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          align-items: flex-start;
          position: relative;
          z-index: 2;
          animation: fadeSlideUp 0.9s 0.2s ease both;
        }

        /* ── DESKTOP solar system (half-orbit crop) ── */
        .solar-system {
          position: relative;
          width: 650px;
          height: 320px;
          overflow: hidden;
          margin-top: -90px;
          transform: translateX(-20px);
        }

        .orbit-ring.outer {
          position: absolute;
          width: 440px; height: 440px;
          border-radius: 50%;
          border: 1.5px solid rgba(2,172,232,0.2);
          left: 50%; top: 40px;
          transform: translateX(-50%);
          pointer-events: none;
        }
        .orbit-ring.outer::before {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 1px solid rgba(2,172,232,0.06);
        }

        .orbit-ring.inner {
          position: absolute;
          width: 290px; height: 290px;
          border-radius: 50%;
          border: 1.5px solid rgba(124,110,250,0.18);
          left: 50%; top: 115px;
          transform: translateX(-50%);
          pointer-events: none;
        }
        .orbit-ring.inner::before {
          content: '';
          position: absolute;
          inset: -5px;
          border-radius: 50%;
          border: 1px solid rgba(124,110,250,0.05);
        }

        .orbit-center.outer {
          position: absolute;
          left: 50%; top: 260px;
          width: 0; height: 0;
          transform: translateX(-50%);
          z-index: 5;
        }
        .orbit-center.inner {
          position: absolute;
          left: 50%; top: 260px;
          width: 0; height: 0;
          transform: translateX(-50%);
          z-index: 6;
        }

        .sun {
          position: absolute;
          left: 50%; top: 250px;
          transform: translate(-50%, -50%);
          width: 100px; height: 52px;
          display: flex;
          align-items: end;
          justify-content: center;
          z-index: 30;
          text-align: center;
          pointer-events: none;
        }
        .sun::before {
          content: '';
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 100px; height: 52px;
          background: linear-gradient(135deg, #02ACE8, #7C6EFA);
          border-radius: 120px 120px 0 0;
          z-index: -1;
          opacity: 0.95;
          border: 1px solid rgba(255,255,255,0.14);
          box-shadow: 0 8px 28px rgba(2,172,232,0.28);
        }
        .sun::after {
          content: '';
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 90px; height: 42px;
          border-radius: 110px 110px 0 0;
          background: radial-gradient(circle at 50% 25%, rgba(255,255,255,0.18), transparent 60%);
          z-index: -1;
          pointer-events: none;
        }
        .sun h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px;
          font-weight: 700;
          color: #fff;
          text-shadow: 0 1px 4px rgba(0,0,0,0.45);
          margin: 0;
          line-height: 1.2;
          position: relative;
          z-index: 2;
          max-width: 80px;
        }

        /* ── PLANETS ── */
        .planet.outer {
          position: absolute;
          top: 0; left: 0;
          width: 46px; height: 46px;
          margin-left: -23px; margin-top: -23px;
          border-radius: 50%;
          background: rgba(10,14,26,0.85);
          border: 1px solid rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.4);
          z-index: 5;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-duration: 40s;
          transition: border-color .2s, box-shadow .2s;
          cursor: default;
        }

        .planet.inner {
          position: absolute;
          top: 0; left: 0;
          width: 42px; height: 42px;
          margin-left: -21px; margin-top: -21px;
          border-radius: 50%;
          background: rgba(10,14,26,0.9);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.35);
          z-index: 6;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-duration: 28s;
          transition: border-color .2s, box-shadow .2s;
          cursor: default;
        }

        .planet.outer:hover,
        .planet.inner:hover {
          border-color: rgba(2,172,232,0.6);
          box-shadow: 0 8px 24px rgba(2,172,232,0.2);
          z-index: 20;
        }

        .planet .label {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          font-size: 10px;
          color: #8aa0c0;
          white-space: nowrap;
          font-weight: 600;
          pointer-events: none;
          background: rgba(10,14,26,0.9);
          padding: 3px 8px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.25);
        }

        /* ════════════════════════════════
           RESPONSIVE
        ════════════════════════════════ */

        @media (max-width: 1100px) {
          .hero { gap: 0; padding: 35px 40px 90px; }
        }

        /* ── TABLET 1024px — stack, keep half-orbit ── */
        @media (max-width: 1024px) {
          .hero {
            flex-direction: column;
            text-align: center;
            gap: 20px;
            padding: 60px 28px 70px;
          }
          .hero-left  { order: 1; max-width: 100%; margin-top: 0; }
          .hero-right { order: 2; width: 100%; justify-content: center; }
          .hero-tag   { justify-content: center; }
          .hero-title { font-size: 38px; }
          .hero-desc  { max-width: 100%; margin: 0 auto 24px; }
          .hero-buttons { justify-content: center; }

          .solar-system {
            width: 500px;
            height: 480px;
            overflow: hidden;
            margin-top: 0;
            transform: none;
          }
          .orbit-ring.outer { width: 440px; height: 440px; top: 40px; }
          .orbit-ring.inner { width: 290px; height: 290px; top: 115px; }
          .orbit-center.outer,
          .orbit-center.inner { top: 260px; }
          .sun { top: 250px; }
        }

        /* ════════════════════════════════
           MOBILE ≤ 768px
           Full circle layout — no clipping
           Mobile-specific smaller keyframes applied
        ════════════════════════════════ */
        @media (max-width: 768px) {
          .hero {
            padding: 50px 20px 40px;
            gap: 10px;
            min-height: auto;
          }
          .hero-left  { margin-top: 0; }
          .hero-title { font-size: 26px; line-height: 1.2; }
          .hero-desc  { font-size: 14px; }
          .hero-buttons {
            flex-direction: column;
            width: 100%;
            align-items: center;
          }
          .btn-primary,
          .btn-outline {
            width: 100%;
            padding: 14px 18px;
            font-size: 12px;
          }

          /*
            Full circle: center is exactly in the middle.
            Container = (radius + icon_half + padding) * 2
            Outer radius 120 → need 120+23+17=160 each side → 320px
            Add 20px top/bottom breathing room → 360px height
          */
          .solar-system {
            width: 300px;
            height: 300px;
            overflow: visible;   /* ← KEY: no clipping on mobile */
            margin: 20px auto 30px;
            transform: none;
          }

          /* Decorative rings — centered in the 300×300 box */
          .orbit-ring.outer {
            width: 260px; height: 260px;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
          }
          .orbit-ring.inner {
            width: 164px; height: 164px;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
          }

          /* Pivot point = dead center of the 300×300 box */
          .orbit-center.outer,
          .orbit-center.inner {
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }

          /* Sun badge — centered */
          .sun {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80px; height: 80px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .sun::before {
            width: 80px; height: 80px;
            border-radius: 50%;         /* full circle on mobile */
          }
          .sun::after {
            width: 70px; height: 70px;
            border-radius: 50%;
          }
          .sun h3 { font-size: 9px; max-width: 64px; text-align: center; }

          /* Switch to mobile-radius animations */
          .planet.outer {
            width: 34px; height: 34px;
            margin-left: -17px; margin-top: -17px;
            font-size: 15px;
            animation-duration: 40s;
          }
          .planet.inner {
            width: 30px; height: 30px;
            margin-left: -15px; margin-top: -15px;
            font-size: 13px;
            animation-duration: 28s;
          }

          /* Apply mobile keyframes */
          .planet.outer:nth-child(1)  { animation-name: outer_orbit_mob_0; }
          .planet.outer:nth-child(2)  { animation-name: outer_orbit_mob_1; }
          .planet.outer:nth-child(3)  { animation-name: outer_orbit_mob_2; }
          .planet.outer:nth-child(4)  { animation-name: outer_orbit_mob_3; }
          .planet.outer:nth-child(5)  { animation-name: outer_orbit_mob_4; }
          .planet.outer:nth-child(6)  { animation-name: outer_orbit_mob_5; }
          .planet.outer:nth-child(7)  { animation-name: outer_orbit_mob_6; }
          .planet.outer:nth-child(8)  { animation-name: outer_orbit_mob_7; }
          .planet.outer:nth-child(9)  { animation-name: outer_orbit_mob_8; }
          .planet.outer:nth-child(10) { animation-name: outer_orbit_mob_9; }
          .planet.outer:nth-child(11) { animation-name: outer_orbit_mob_10; }

          .planet.inner:nth-child(1)  { animation-name: inner_orbit_mob_0; }
          .planet.inner:nth-child(2)  { animation-name: inner_orbit_mob_1; }
          .planet.inner:nth-child(3)  { animation-name: inner_orbit_mob_2; }
          .planet.inner:nth-child(4)  { animation-name: inner_orbit_mob_3; }
          .planet.inner:nth-child(5)  { animation-name: inner_orbit_mob_4; }

          .planet .label { display: none; }
        }

        /* ── 460px — same full-circle, just slightly smaller ── */
        @media (max-width: 460px) {
          .hero { padding: 40px 16px 36px; }
          .hero-title { font-size: 20px; }

          .solar-system {
            width: 260px;
            height: 260px;
            margin: 16px auto 24px;
          }

          .orbit-ring.outer { width: 224px; height: 224px; }
          .orbit-ring.inner { width: 140px; height: 140px; }

          .planet.outer {
            width: 30px; height: 30px;
            margin-left: -15px; margin-top: -15px;
            font-size: 13px;
          }
          .planet.inner {
            width: 26px; height: 26px;
            margin-left: -13px; margin-top: -13px;
            font-size: 11px;
          }

          .sun { width: 68px; height: 68px; }
          .sun::before { width: 68px; height: 68px; }
          .sun::after  { width: 58px; height: 58px; }
          .sun h3 { font-size: 8px; max-width: 56px; }
        }

        /* ════════════════════════════════
           KEYFRAMES
        ════════════════════════════════ */
        ${outerOrbitCSS}
        ${innerOrbitCSS}
        ${outerOrbitMobCSS}
        ${innerOrbitMobCSS}
      `}</style>

      <section id="home" className="hero">
        <div className="hero-left">
          <div className="hero-tag">We Build Scalable Web & Mobile Apps</div>
          <h1 className="hero-title">YOUR MVP WILL BE READY IN 24/hrs</h1>
          <p className="hero-desc">
            Helping startups and businesses turn their ideas into powerful digital products.
            We build websites & mobile apps from scratch to launch.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">View Our Work</a>
            <a href="#contact" className="btn-outline">Get In Touch</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="solar-system">
            <div className="orbit-ring outer"></div>
            <div className="orbit-ring inner"></div>
            <div className="sun">
              <h3>Technology We Master</h3>
            </div>

            <div className="orbit-center outer">
              {outerTechIcons.map((item, i) => (
                <div
                  key={`outer-${i}`}
                  className="planet outer"
                  style={{ animationName: `outer_orbit_${i}` }}
                >
                  <span style={{ color: item.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {item.icon}
                  </span>
                  <span className="label">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="orbit-center inner">
              {innerTechIcons.map((item, i) => (
                <div
                  key={`inner-${i}`}
                  className="planet inner"
                  style={{ animationName: `inner_orbit_${i}` }}
                >
                  <span style={{ color: item.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {item.icon}
                  </span>
                  <span className="label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;