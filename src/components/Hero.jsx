import React from "react";

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
          padding: 5px 72px 100px;
          background: #0A0E1A;
          color: white;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          scroll-margin-top: 80px;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -120px;
          left: -80px;
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, rgba(2, 172, 232, 0.18) 0%, transparent 70%);
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
          background: radial-gradient(circle, rgba(100, 80, 255, 0.14) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: blobFloat 10s ease-in-out infinite reverse;
        }

        @keyframes blobFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }

        /* TOP CENTER TAG */
        .hero-tag {
          position: absolute;
          top: 40px;
          left: 25%;
          transform: translateX(-50%);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(2, 172, 232, 0.1);
          border: 1px solid rgba(2, 172, 232, 0.3);
          border-radius: 100px;
          padding: 2px 8px;
          font-size: 25px;
          font-weight: 400;
          letter-spacing: 2.5px;
          color: #02ACE8;
          text-transform: uppercase;
        }

        .hero-tag::before {
          content: '';
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #02ACE8;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.75); }
        }

        .hero-left {
          margin-top: 20px;
          flex: 1;
          position: relative;
          z-index: 2;
          animation: fadeSlideUp 0.9s ease both;
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hero-title {
  font-size: 30px;
  line-height: 1.25;
  margin-bottom: 2px;   /* gap reduce */
}

        .hero-title .highlight {
          background: linear-gradient(90deg, #02ACE8 10%, #7C6EFA 80%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-right {
          flex: 1;
          padding-left: 80px;
          position: relative;
          z-index: 2;
          animation: fadeSlideUp 0.9s 0.2s ease both;
        }

        .hero-desc {
          color: #8A9BBE;
          font-size: 17px;
          line-height: 1.85;
          margin-bottom: 14px;
          max-width: 420px;
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
          border-radius: 1px;
          font-weight: 600;
          cursor: pointer;
          color: white;
          font-size: 13px;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          font-family: 'DM Sans', sans-serif;
          transition: transform 0.18s ease, box-shadow 0.18s ease, opacity 0.18s;
          box-shadow: 0 8px 28px rgba(2, 172, 232, 0.28);
          position: relative;
          overflow: hidden;
          text-decoration: none;
        }

        .btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.08);
          opacity: 0;
          transition: opacity 0.18s;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 36px rgba(2, 172, 232, 0.38);
        }

        .btn-primary:hover::after {
          opacity: 1;
        }

        .btn-primary:active {
          transform: scale(0.97);
        }

        .btn-outline {
          background: transparent;
          border: 1.5px solid rgba(255,255,255,0.15);
          padding: 15px 30px;
          border-radius: 1px;
          font-weight: 600;
          cursor: pointer;
          color: #B4C4D8;
          text-decoration: none;
          font-size: 13px;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          font-family: 'DM Sans', sans-serif;
          transition: border-color 0.18s ease, color 0.18s ease, transform 0.18s ease;
          backdrop-filter: blur(6px);
        }

        .btn-outline:hover {
          border-color: #02ACE8;
          color: #E8F4FF;
          transform: translateY(-3px);
        }

        .btn-outline:active {
          transform: scale(0.97);
        }

        .flutter-card {
          position: absolute;
          right: 72px;
          top: 50%;
          transform: translateY(-50%);
          width: 220px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          padding: 24px;
          backdrop-filter: blur(16px);
          display: flex;
          flex-direction: column;
          gap: 14px;
          z-index: 1;
          animation: cardFloat 6s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes cardFloat {
          0%, 100% { transform: translateY(-50%) translateY(0px); }
          50% { transform: translateY(-50%) translateY(-14px); }
        }

        .flutter-card-stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .flutter-card-stat .stat-num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: #F0F6FF;
        }

        .flutter-card-stat .stat-label {
          font-size: 12px;
          color: #6B7E9A;
          letter-spacing: 0.5px;
        }

        .divider {
          height: 1px;
          background: rgba(255,255,255,0.07);
        }

        .card-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 600;
          color: #34D399;
          letter-spacing: 0.5px;
        }

        .card-badge::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #34D399;
        }

        @media (max-width: 1200px) {
          .flutter-card { display: none; }
        }

        @media (max-width: 1024px) {
          .hero {
            flex-direction: column;
            padding: 90px 32px;
          }
          .hero-right {
            padding-left: 0;
            margin-top: 52px;
          }
          .hero-title { font-size: 42px; }
        }

        /* MOBILE FIX */
        @media (max-width: 768px) {
          .hero {
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            padding: 100px 24px 80px;
            min-height: 100vh;
          }

          .hero-tag {
            left: 50%;
            transform: translateX(-50%);
            font-size: 11px;
            letter-spacing: 1.5px;
            white-space: nowrap;
            top: 28px;
          }

          .hero-left {
            width: 100%;
            margin-top: 40px;
          }

          .hero-title {
            font-size: 30px;
            line-height: 1.25;
          }

          .hero-right {
            padding-left: 0;
            margin-top: 32px;
            width: 100%;
          }

          .hero-desc {
            font-size: 15px;
            line-height: 1.75;
            margin-bottom: 32px;
            max-width: 100%;
          }

          .hero-buttons {
            flex-direction: column;
            width: 100%;
          }

          .btn-primary,
          .btn-outline {
            text-align: center;
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .hero {
            padding: 90px 20px 70px;
          }

          .hero-title { font-size: 26px; }

          .hero-tag {
            font-size: 10px;
            letter-spacing: 1px;
            padding: 4px 12px;
          }

          .hero-desc {
            font-size: 14px;
          }
        }
      `}</style>

      <section id="home" className="hero">

        {/* TOP CENTER TAG */}
        <div className="hero-tag">
          Your MVP will be ready in 24 hrs
        </div>

        <div className="hero-left">
          <h1 className="hero-title">
  We Build Scalable <br />
  <span className="highlight">Web & Mobile Apps</span>
</h1>
        </div>

        <div className="hero-right">
          <p className="hero-desc">
            Helping Startups and bussiness turn their ideas into
            powerful digital products.
            <br/>
            We design, develop and launch scalable mobile and web applications 
            using modern technologies like Flutter, React        
          </p>

          <div className="hero-buttons">
  <a href="#projects" className="btn-primary">View Our Work</a>
  <a href="#contact" className="btn-outline">Get In Touch</a>
</div>
        </div>

    

      </section>
    </>
  );
};

export default Hero;