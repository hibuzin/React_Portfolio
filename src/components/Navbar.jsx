import { useState, useEffect } from "react";

const Navbar = () => {

  const [active, setActive] = useState("HOME");
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "HOME", id: "home" },
    { name: "SERVICES", id: "services" },
    { name: "OUR PROCESS", id: "process" },
    { name: "PROJECTS", id: "projects" },
    { name: "TECH", id: "tech" },
    { name: "BLOG", id: "blog" },
    { name: "ABOUT", id: "about" }
  ];

  useEffect(() => {

    const handleScroll = () => {

      const sections = [
        "home",
        "services",
        "process",
        "projects",
        "tech",
        "blog",
        "about"
      ];

      let currentSection = "";

      sections.forEach((section) => {
        const el = document.getElementById(section);

        if (el) {
          const rect = el.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section.toUpperCase();
          }
        }
      });

      if (currentSection) setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <>
      <style>{`

        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&family=Exo+2:wght@400;600&display=swap');

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        html{
          scroll-behavior:smooth;
        }

        .navbar{
          width:100%;
          background:#0d0d0f;
          border-bottom:1px solid rgba(255,255,255,0.06);
          padding:0 40px;
          height:64px;

          display:flex;
          align-items:center;
          justify-content:space-between;

          font-family:'Exo 2', sans-serif;

          position:sticky;
          top:0;
          z-index:9999;

          background:rgba(13,13,15,0.95);
          backdrop-filter:blur(8px);
        }

        .logo{
          font-family:'Rajdhani', sans-serif;
          font-size:26px;
          font-weight:700;
          background:linear-gradient(90deg,#38bdf8,#818cf8);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          letter-spacing:2px;
          cursor:pointer;
        }

        .nav-right{
          display:flex;
          align-items:center;
          gap:40px;
        }

        .nav-links{
          display:flex;
          align-items:center;
          gap:32px;
          list-style:none;
        }

        .nav-links a{
          text-decoration:none;
          font-size:13px;
          font-weight:600;
          letter-spacing:1.5px;
          color:#94a3b8;
          cursor:pointer;
          transition:color .2s;
          white-space:nowrap;
        }

        .nav-links a.active{
          background:linear-gradient(90deg,#38bdf8,#818cf8);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .nav-links a:hover:not(.active){
          color:#e2e8f0;
        }

        /* ── HIRE US: Glow + Pulse slow & smooth ── */

        @keyframes glowPulse {
          0% {
            transform: scale(1);
            box-shadow:
              0 0 4px 1px rgba(139, 92, 246, 0.2),
              0 0 10px 2px rgba(99, 102, 241, 0.12);
          }
          50% {
            transform: scale(1.06);
            box-shadow:
              0 0 8px 3px rgba(139, 92, 246, 0.35),
              0 0 20px 6px rgba(99, 102, 241, 0.2),
              0 0 35px 10px rgba(56, 189, 248, 0.08);
          }
          100% {
            transform: scale(1);
            box-shadow:
              0 0 4px 1px rgba(139, 92, 246, 0.2),
              0 0 10px 2px rgba(99, 102, 241, 0.12);
          }
        }

        .live-btn {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 1px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          cursor: pointer;
          white-space: nowrap;
          transition: opacity 0.3s, transform 0.3s;

          animation: glowPulse 2.8s ease-in-out infinite;
        }

        .live-btn:hover {
          opacity: 0.92;
          animation-play-state: paused;
          transform: scale(1.08);
          box-shadow:
            0 0 10px 4px rgba(139, 92, 246, 0.45),
            0 0 24px 8px rgba(99, 102, 241, 0.25),
            0 0 40px 12px rgba(56, 189, 248, 0.1);
        }

        .menu-icon{
          display:none;
          font-size:26px;
          color:white;
          cursor:pointer;
        }

        /* MOBILE */

        @media(max-width:900px){

          .navbar{
            padding:0 20px;
          }

          .menu-icon{
            display:block;
          }

          .nav-links{
            position:absolute;
            top:64px;
            right:0;

            background:#0d0d0f;

            flex-direction:column;
            width:220px;
            padding:25px;

            gap:20px;

            transform:translateX(100%);
            transition:.3s ease;
          }

          .nav-links.open{
            transform:translateX(0);
          }

          .live-btn{
            display:none;
          }

          .nav-right{
            gap:16px;
          }

        }

      `}</style>

      <nav className="navbar">

        <div className="logo">HIBUZ</div>

        <div className="nav-right">

          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={`#${link.id}`}
                  className={active === link.id.toUpperCase() ? "active" : ""}
                  onClick={() => {
                    setActive(link.id.toUpperCase());
                    setMenuOpen(false);
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="live-btn"
            onClick={() => {
              const section = document.getElementById("contact");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            HIRE US
          </button>

          <div
            className="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>

        </div>

      </nav>
    </>
  );
};

export default Navbar;