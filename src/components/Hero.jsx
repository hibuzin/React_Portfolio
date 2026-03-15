import React from "react";
import {
  FaAndroid, FaJava, FaWindows, FaFigma, FaStripe,
  FaPython, FaAws, FaReact, FaNodeJs, FaDocker,
} from "react-icons/fa";
import {
  SiFlutter, SiKotlin, SiCloudinary, SiRender, SiMongodb, SiFirebase,
} from "react-icons/si";

/* ---------- OUTER ORBIT ICONS ---------- */
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

/* ---------- INNER ORBIT ICONS ---------- */
const innerTechIcons = [
  { icon: <FaReact />, label: "React", color: "#61DAFB" },
  { icon: <SiMongodb />, label: "MongoDB", color: "#47A248" },
  { icon: <FaNodeJs />, label: "Node.js", color: "#68A063" },
  { icon: <FaDocker />, label: "Docker", color: "#2496ED" },
  { icon: <SiFirebase />, label: "Firebase", color: "#FFCA28" },
];

/* ---------- RADII ---------- */
const OUTER_RADIUS = 220;
const INNER_RADIUS = 145;

const OUTER_COUNT = outerTechIcons.length;
const INNER_COUNT = innerTechIcons.length;

/* ---------- KEYFRAME GENERATOR ---------- */
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

/* ---------- OUTER ORBIT CSS ---------- */
let outerOrbitCSS = "";
outerTechIcons.forEach((_, i) => {
  const startDeg = (360 / OUTER_COUNT) * i;
  outerOrbitCSS += makeKeyframe(`outer_orbit_${i}`, startDeg, OUTER_RADIUS, false);
});

/* ---------- INNER ORBIT CSS (REVERSE) ---------- */
let innerOrbitCSS = "";
innerTechIcons.forEach((_, i) => {
  const startDeg = (360 / INNER_COUNT) * i;
  innerOrbitCSS += makeKeyframe(`inner_orbit_${i}`, startDeg, INNER_RADIUS, true);
});

const Hero = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

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
          top: -120px;
          left: -80px;
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, rgba(2,172,232,0.18) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: blobFloat 8s ease-in-out infinite;
        }

        .hero::after {
          content: '';
          position: absolute;
          bottom: -100px;
          right: 10%;
          width: 360px;
          height: 360px;
          background: radial-gradient(circle, rgba(100,80,255,0.14) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: blobFloat 10s ease-in-out infinite reverse;
        }

        @keyframes blobFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── LEFT (UNCHANGED) ── */
        .hero-left {
          flex: 1;
          max-width: 520px;
          position: relative;
          z-index: 2;
          animation: fadeSlideUp 0.9s ease both;
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
          margin-bottom: 14px;
        }

        .hero-tag::before {
          content: '';
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #02ACE8;
          animation: pulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.75); }
        }

        .hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 26px;
          line-height: 1.1;
          font-weight: 700;
          margin-bottom: 18px;
        }

        .hero-desc {
          color: #8A9BBE;
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 28px;
          max-width: 480px;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

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

        /* ── RIGHT (UNCHANGED DESKTOP) ── */
        .hero-right {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          align-items: flex-start;
          position: relative;
          z-index: 2;
          animation: fadeSlideUp 0.9s 0.2s ease both;
          padding-top: 0px;
          padding-right: 2px;
          padding-left: 0px;
        }

        /*
          DESKTOP (unchanged):
          H=320, outer-R=220, inner-R=145
          outer ring: size=440, top=40   → but top=40 means center = 40+220 = 260
          inner ring: size=290, top=115  → center = 115+145 = 260
          orbit-center: top=260 ✓ (both already match in original)
          sun: top=250 (matches original, just inside visible arc)
          margin-top: -90px kept for desktop visual balance
        */
        .solar-system {
          position: relative;
          width: 650px;
          height: 320px;
          overflow: hidden;
          margin-top: -90px;
          transform: translateX(-20px);
        }

        /* OUTER RING (UNCHANGED) */
        .orbit-ring.outer {
          position: absolute;
          width: 440px;
          height: 440px;
          border-radius: 50%;
          border: 1.5px solid rgba(2,172,232,0.2);
          left: 50%;
          top: 40px;
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

        /* INNER RING (UNCHANGED) */
        .orbit-ring.inner {
          position: absolute;
          width: 290px;
          height: 290px;
          border-radius: 50%;
          border: 1.5px solid rgba(124,110,250,0.18);
          left: 50%;
          top: 115px;
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

        /* OUTER CENTER (UNCHANGED) */
        .orbit-center.outer {
          position: absolute;
          left: 50%;
          top: 260px;
          width: 0;
          height: 0;
          transform: translateX(-50%);
          z-index: 5;
        }

        /* INNER CENTER (UNCHANGED) */
        .orbit-center.inner {
          position: absolute;
          left: 50%;
          top: 260px;
          width: 0;
          height: 0;
          transform: translateX(-50%);
          z-index: 6;
        }

        /* SUN (UNCHANGED) */
        .sun {
          position: absolute;
          left: 50%;
          top: 250px;
          transform: translate(-50%, -50%);
          width: 100px;
          height: 52px;
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
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100px;
          height: 52px;
          background: linear-gradient(135deg, #02ACE8, #7C6EFA);
          border-radius: 120px 120px 0 0;
          z-index: -1;
          opacity: 0.95;
          border: 1px solid rgba(255, 255, 255, 0.14);
          box-shadow: 0 8px 28px rgba(2,172,232,0.28);
        }

        .sun::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90px;
          height: 42px;
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
          text-shadow: 0 1px 4px rgba(0,0,0,0.45), 0 0 10px rgba(255,120,185,0.18);
          margin: 0;
          line-height: 1.2;
          position: relative;
          z-index: 2;
          max-width: 80px;
        }

        /* PLANETS (UNCHANGED) */
        .planet.outer {
          position: absolute;
          top: 0;
          left: 0;
          width: 46px;
          height: 46px;
          margin-left: -23px;
          margin-top: -23px;
          font-size: 20px;
          border-radius: 50%;
          background: rgba(10, 14, 26, 0.85);
          border: 1px solid rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(0,0,0,0.4);
          z-index: 5;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-duration: 40s;
          transition: transform .2s, border-color .2s, box-shadow .2s;
          cursor: default;
        }

        .planet.inner {
          position: absolute;
          top: 0;
          left: 0;
          width: 42px;
          height: 42px;
          margin-left: -21px;
          margin-top: -21px;
          border-radius: 50%;
          background: rgba(10, 14, 26, 0.9);
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
          transition: transform .2s, border-color .2s, box-shadow .2s;
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
          background: rgba(10, 14, 26, 0.9);
          padding: 3px 8px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.25);
        }

        /* ── 1100 (UNCHANGED) ── */
        @media (max-width: 1100px) {
          .hero {
            gap: 0;
            padding: 35px 40px 90px;
          }
        }

        /* ── 1024 (UNCHANGED) ── */
        @media (max-width: 1024px) {
          .hero {
            flex-direction: column;
            text-align: center;
            gap: 20px;
            padding: 95px 28px 70px;
          }
          .hero-left {
            max-width: 100%;
            order: 2;
          }
          .hero-right {
            order: 1;
            width: 100%;
            justify-content: center;
            padding-top: 0;
          }
          .hero-tag { justify-content: center; }
          .hero-title { font-size: 38px; }
          .hero-desc { max-width: 100%; margin: 0 auto 24px; }
          .hero-buttons { justify-content: center; }
        }

        /*
          ── 768px FIXED ──
          H=220  (solar-system height)
          outer-R=140 → ring size=280, ring top = H-R = 220-140 = 80
          inner-R=95  → ring size=190, ring top = H-R = 220-95  = 125
          orbit-center top = H = 220
          sun top = H - outer-R*0.55 = 220 - 77 = 143
        */
        @media (max-width: 768px) {
          .hero {
            padding: 85px 20px 55px;
            gap: 26px;
            min-height: auto;
          }
          .hero-title { font-size: 28px; line-height: 1.2; }
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

          .hero-right {
            justify-content: center;
            align-items: flex-end;
          }

          .solar-system {
            width: 320px;
            height: 220px;
            margin-top: 0;
            transform: none;
          }

          /* outer: R=140, size=280, top=220-140=80 */
          .orbit-ring.outer {
            width: 280px;
            height: 280px;
            top: 80px;
          }

          /* inner: R=95, size=190, top=220-95=125 */
          .orbit-ring.inner {
            width: 190px;
            height: 190px;
            top: 125px;
          }

          /* pivot = H = 220 */
          .orbit-center.outer,
          .orbit-center.inner {
            top: 220px;
          }

          /* sun = 220 - 77 = 143 */
          .sun {
            top: 143px;
          }
          .sun::before {
            width: 90px;
            height: 46px;
          }
          .sun h3 { font-size: 9px; }

          .planet.outer {
            width: 36px; height: 36px;
            margin-left: -18px; margin-top: -18px;
            font-size: 15px;
          }
          .planet.inner {
            width: 30px; height: 30px;
            margin-left: -15px; margin-top: -15px;
            font-size: 13px;
          }
          .planet .label { display: none; }
        }

        /*
          ── 460px FIXED ──
          H=180
          outer-R=112 → ring size=224, ring top = 180-112 = 68
          inner-R=76  → ring size=152, ring top = 180-76  = 104
          orbit-center top = 180
          sun top = 180 - 112*0.55 = 180-62 = 118
        */
        @media (max-width: 460px) {
          .hero { padding: 20px 16px 48px; }
          .hero-title { font-size: 22px; }

          .solar-system {
            width: 264px;
            height: 180px;
            margin-top: 0;
            transform: none;
          }

          /* outer: R=112, size=224, top=180-112=68 */
          .orbit-ring.outer {
            width: 224px;
            height: 224px;
            top: 68px;
          }

          /* inner: R=76, size=152, top=180-76=104 */
          .orbit-ring.inner {
            width: 152px;
            height: 152px;
            top: 104px;
          }

          /* pivot = H = 180 */
          .orbit-center.outer,
          .orbit-center.inner {
            top: 180px;
          }

          /* sun = 180 - 62 = 118 */
          .sun {
            top: 118px;
          }
          .sun::before {
            width: 78px;
            height: 40px;
          }
          .sun h3 { font-size: 8px; }

          .planet.outer {
            width: 28px; height: 28px;
            margin-left: -14px; margin-top: -14px;
            font-size: 12px;
          }
          .planet.inner {
            width: 22px; height: 22px;
            margin-left: -11px; margin-top: -11px;
            font-size: 10px;
          }
        }

        ${outerOrbitCSS}
        ${innerOrbitCSS}
      `}</style>

      <section id="home" className="hero">
        <div className="hero-left">
          <div className="hero-tag">We Build Scalable Web & Mobile Apps</div>
          <h1 className="hero-title">Your MVP Will Be Ready in 24 hrs</h1>
          <p className="hero-desc">
            Helping startups and businesses turn their ideas into powerful digital products.
            We design, develop and launch scalable mobile and web applications
            using modern technologies like Flutter and React.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">View Our Work</a>
            <a href="#contact" className="btn-outline">Get In Touch</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="solar-system">
            {/* OUTER RING */}
            <div className="orbit-ring outer"></div>

            {/* INNER RING */}
            <div className="orbit-ring inner"></div>

            {/* CENTER TEXT */}
            <div className="sun">
              <h3>Technology We Master</h3>
            </div>

            {/* OUTER ORBIT - NORMAL */}
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

            {/* INNER ORBIT - REVERSE */}
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