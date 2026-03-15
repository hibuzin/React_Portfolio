import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("HOME");
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "HOME", id: "home" },
    { name: "SERVICES", id: "services" },
    { name: "OUR PROCESS", id: "process" },
    { name: "PROJECTS", id: "projects" },
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

  // optional: lock body scroll when mobile menu open
  useEffect(() => {
    if (window.innerWidth <= 900) {
      document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

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
          height:64px;
          padding:0 40px;

          display:flex;
          align-items:center;
          justify-content:space-between;

          font-family:'Exo 2', sans-serif;

          position:sticky;
          top:0;
          z-index:9999;

          background:rgba(13,13,15,0.95);
          backdrop-filter:blur(8px);
          border-bottom:1px solid rgba(255,255,255,0.06);
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
          z-index:10001;
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
          transition:color .25s ease;
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

        /* HIRE US */
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

        .live-btn{
          background:linear-gradient(135deg,#6366f1,#8b5cf6);
          color:#fff;
          border:none;
          padding:10px 20px;
          border-radius:1px;
          font-size:13px;
          font-weight:700;
          letter-spacing:1.5px;
          cursor:pointer;
          white-space:nowrap;
          transition:opacity 0.3s, transform 0.3s;

          animation:glowPulse 2.8s ease-in-out infinite;
        }

        .live-btn:hover{
          opacity:0.92;
          animation-play-state:paused;
          transform:scale(1.08);
          box-shadow:
            0 0 10px 4px rgba(139, 92, 246, 0.45),
            0 0 24px 8px rgba(99, 102, 241, 0.25),
            0 0 40px 12px rgba(56, 189, 248, 0.1);
        }

        .menu-icon{
          display:none;
          width:42px;
          height:42px;
          border-radius:12px;
          border:1px solid rgba(255,255,255,0.08);
          background:rgba(255,255,255,0.04);
          color:#fff;
          cursor:pointer;

          align-items:center;
          justify-content:center;

          font-size:22px;
          line-height:1;
          user-select:none;
          transition:all .25s ease;
          z-index:10001;
        }

        .menu-icon:hover{
          background:rgba(255,255,255,0.08);
          border-color:rgba(56,189,248,0.25);
        }

        .mobile-overlay{
          display:none;
        }

        /* =========================
           MOBILE ONLY FIX
        ========================= */
        @media(max-width:900px){
          .navbar{
            padding:0 18px;
            height:64px;
          }

          .logo{
            font-size:24px;
          }

          .nav-right{
            gap:12px;
          }

          .live-btn{
            display:none;
          }

          .menu-icon{
            display:flex;
          }

          .mobile-overlay{
            display:block;
            position:fixed;
            inset:64px 0 0 0;
            background:rgba(0,0,0,0.45);
            backdrop-filter:blur(4px);
            opacity:0;
            pointer-events:none;
            transition:opacity .28s ease;
            z-index:9997;
          }

          .mobile-overlay.show{
            opacity:1;
            pointer-events:auto;
          }

          .nav-links{
            position:fixed;
            top:76px;
            left:50%;
            transform:translateX(-50%) translateY(-20px) scale(0.96);
            opacity:0;
            pointer-events:none;

            width:calc(100% - 32px);
            max-width:360px;

            display:flex;
            flex-direction:column;
            align-items:stretch;
            gap:10px;
            list-style:none;

            padding:16px;
            margin:0;

            background:rgba(13,13,15,0.92);
            border:1px solid rgba(255,255,255,0.08);
            border-radius:20px;
            backdrop-filter:blur(16px);

            box-shadow:
              0 18px 40px rgba(0,0,0,0.35),
              0 0 0 1px rgba(255,255,255,0.02);

            transition:
              opacity .28s ease,
              transform .28s ease;

            z-index:9998;
          }

          .nav-links.open{
            opacity:1;
            pointer-events:auto;
            transform:translateX(-50%) translateY(0) scale(1);
          }

          .nav-links li{
            width:100%;
          }

          .nav-links a{
            display:flex;
            align-items:center;
            justify-content:center;
            width:100%;

            padding:14px 16px;
            border-radius:14px;

            font-size:13px;
            font-weight:700;
            letter-spacing:1.3px;
            color:#cbd5e1;

            background:rgba(255,255,255,0.03);
            border:1px solid transparent;

            transition:all .22s ease;
          }

          .nav-links a:hover{
            color:#fff;
            background:rgba(255,255,255,0.06);
            border-color:rgba(255,255,255,0.06);
          }

          .nav-links a.active{
            background:rgba(56,189,248,0.08);
            border-color:rgba(56,189,248,0.22);
            color:#67e8f9;
            -webkit-text-fill-color:unset;
            -webkit-background-clip:unset;
            background-image:none;
          }
        }

        @media(max-width:480px){
          .navbar{
            padding:0 14px;
          }

          .logo{
            font-size:22px;
            letter-spacing:1.5px;
          }

          .menu-icon{
            width:40px;
            height:40px;
            font-size:20px;
            border-radius:10px;
          }

          .nav-links{
            top:74px;
            width:calc(100% - 24px);
            padding:14px;
            border-radius:18px;
          }

          .nav-links a{
            font-size:12px;
            padding:13px 14px;
            letter-spacing:1.1px;
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
            {menuOpen ? "✕" : "☰"}
          </div>
        </div>
      </nav>

      {/* mobile overlay */}
      <div
        className={`mobile-overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;