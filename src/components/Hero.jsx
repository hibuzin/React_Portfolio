import React from "react";
import {
  FaAndroid, FaJava, FaWindows, FaFigma, FaStripe,
  FaPython, FaAws, FaReact, FaNodeJs, FaDocker,
} from "react-icons/fa";
import {
  SiFlutter, SiKotlin, SiCloudinary, SiRender, SiMongodb, SiFirebase,
} from "react-icons/si";

const techIcons = [
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
  { icon: <FaReact />, label: "React", color: "#61DAFB" },
  { icon: <SiMongodb />, label: "MongoDB", color: "#47A248" },
  { icon: <FaNodeJs />, label: "Node.js", color: "#68A063" },
  { icon: <FaDocker />, label: "Docker", color: "#2496ED" },
  { icon: <SiFirebase />, label: "Firebase", color: "#FFCA28" },
];

const RADIUS = 220;
const COUNT = techIcons.length;

// Generate unique orbit animation for each icon
function makeKeyframe(name, startDeg) {
  const steps = 60;
  let frames = "";
  for (let i = 0; i <= steps; i++) {
    const pct = (i / steps) * 100;
    const angleDeg = startDeg + (i / steps) * 360;
    const angleRad = (angleDeg * Math.PI) / 180;
    const x = RADIUS * Math.cos(angleRad);
    const y = RADIUS * Math.sin(angleRad);
    frames += `  ${pct.toFixed(1)}% { transform: translate(${x.toFixed(2)}px, ${y.toFixed(2)}px); }\n`;
  }
  return `@keyframes ${name} {\n${frames}}\n`;
}

let dynamicCSS = "";
techIcons.forEach((_, i) => {
  const startDeg = (360 / COUNT) * i;
  dynamicCSS += makeKeyframe(`orbit_${i}`, startDeg);
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
          padding: 35px 72px 90px;
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
          0%,100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* LEFT */
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
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #02ACE8;
          animation: pulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes pulse {
          0%,100% { opacity: 1; transform: scale(1); }
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

        /* RIGHT */
        .hero-right {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 2;
          animation: fadeSlideUp 0.9s 0.2s ease both;
        }

        .solar-system {
          position: relative;
          width: 520px;
          height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .orbit-ring {
          position: absolute;
          width: 440px;
          height: 440px;
          border-radius: 50%;
          border: 1.5px solid rgba(2,172,232,0.2);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .orbit-ring::before {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 1px solid rgba(2,172,232,0.06);
        }

        .sun {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 130px;
          height: 130px;
          border-radius: 50%;
         display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 10;
          text-align: center;
        
        }

        .sun h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          text-shadow: 0 1px 4px rgba(0,0,0,0.5);
          margin-bottom: 3px;
          position: relative;
          z-index: 2;
        }

        .sun p {
          font-size: 9px;
          color: rgba(255,255,255,0.9);
          line-height: 1.4;
          padding: 0 8px;
          position: relative;
          z-index: 2;
        }

        @keyframes sunGlow {
          0%,100% {
            box-shadow: 0 0 30px rgba(255,200,0,1), 0 0 65px rgba(255,120,0,0.7), 0 0 120px rgba(255,60,0,0.4);
          }
          50% {
            box-shadow: 0 0 50px rgba(255,220,0,1), 0 0 100px rgba(255,150,0,0.85), 0 0 170px rgba(255,60,0,0.55);
          }
        }

        .planet {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 52px;
          height: 52px;
          margin-left: -26px;
          margin-top: -26px;
          border-radius: 50%;
          background: rgba(10, 14, 26, 0.85);
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
          transition: transform .2s, border-color .2s, box-shadow .2s;
          cursor: default;
        }

      

        .planet .label {
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 9px;
          color: #8aa0c0;
          white-space: nowrap;
          font-weight: 500;
          pointer-events: none;
        }

        @media (max-width: 1100px) {
          .hero { gap: 0; padding: 35px 40px 90px; }
        }

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
          }

          .hero-tag { justify-content: center; }
          .hero-title { font-size: 38px; }
          .hero-desc { max-width: 100%; margin: 0 auto 24px; }
          .hero-buttons { justify-content: center; }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 85px 20px 55px;
            gap: 26px;
            min-height: auto;
          }

          .hero-title {
            font-size: 28px;
            line-height: 1.2;
          }

          .hero-desc { font-size: 14px; }

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

          .solar-system {
            width: 320px;
            height: 320px;
          }

          .orbit-ring {
            width: 280px;
            height: 280px;
          }

          .sun {
            width: 85px;
            height: 85px;
          }

          .sun h3 { font-size: 11px; }
          .sun p { font-size: 8px; }

          .planet {
            width: 38px;
            height: 38px;
            margin-left: -19px;
            margin-top: -19px;
            font-size: 16px;
          }

          .planet .label {
            display: none;
          }
        }

        @media (max-width: 460px) {
          .hero { padding: 20px 16px 48px; }
          .hero-title { font-size: 22px; }

          .solar-system {
            width: 280px;
            height: 280px;
          }

          .orbit-ring {
            width: 240px;
            height: 240px;
          }

          .sun {
            width: 72px;
            height: 72px;
          }

          .planet {
            width: 32px;
            height: 32px;
            margin-left: -16px;
            margin-top: -16px;
            font-size: 14px;
          }
        }

        ${dynamicCSS}
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
            <div className="orbit-ring"></div>

            <div className="sun">
              <h3>Technology We Master</h3>
            </div>

            {techIcons.map((item, i) => (
              <div
                key={i}
                className="planet"
                style={{ animationName: `orbit_${i}` }}
              >
                <span style={{ color: item.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {item.icon}
                </span>
                <span className="label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;