import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("SERVICES");

  const links = [
    { name: "SERVICES", id: "services" },
    { name: "OUR PROCESS", id: "process" },
     { name: "PROJECTS", id: "projects" },
    { name: "ABOUT", id: "about" },
    { name: "TECH", id: "tech" },
   { name: "BLOG", id: "blog" },
    { name: "CONTACT", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
     const sections = [
  "services",
  "process",
  "projects",
  "about",
  "tech",
  "blog",
  "contact",
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

        * { margin: 0; padding: 0; box-sizing: border-box; }

        html {
          scroll-behavior: smooth;
        }

       .navbar {
  width: 100%;
  background: #0d0d0f;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  padding: 0 40px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Exo 2', sans-serif;

  position: sticky;
  top: 0;
  z-index: 9999;

  background: rgba(13,13,15,0.95);
  backdrop-filter: blur(8px);
}
        .logo {
          font-family: 'Rajdhani', sans-serif;
          font-size: 26px;
          font-weight: 700;
          background: linear-gradient(90deg, #38bdf8, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 2px;
          cursor: pointer;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
        }

        .nav-links a {
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1.5px;
          color: #94a3b8;
          cursor: pointer;
          transition: color 0.2s;
          white-space: nowrap;
        }

        .nav-links a.active {
          background: linear-gradient(90deg, #38bdf8, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav-links a:hover:not(.active) {
          color: #e2e8f0;
        }

        .live-btn {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          cursor: pointer;
          white-space: nowrap;
          transition: 0.2s;
        }

        .live-btn:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .navbar { padding: 0 20px; }
          .nav-links { gap: 16px; }
        }
      `}</style>

      <nav className="navbar">
        <div className="logo">HIBUZ</div>

        <div className="nav-right">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={`#${link.id}`}
                  className={active === link.id.toUpperCase() ? "active" : ""}
                  onClick={() => setActive(link.id.toUpperCase())}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="live-btn"
            onClick={() =>
              window.open("https://react-jewellery.onrender.com", "_blank")
            }
          >
            LIVE PROJECT
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;