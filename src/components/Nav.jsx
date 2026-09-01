import { useEffect, useState } from "react";
import "./Nav.css";

const TABS = [
  { id: "home", file: "Home.jsx" },
  { id: "about", file: "About.jsx" },
  { id: "skills", file: "Skills.jsx" },
  { id: "projects", file: "Projects.jsx" },
  { id: "services", file: "Services.jsx" },
  { id: "contact", file: "Contact.jsx" },
];

export default function Nav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  // highlight the tab whose section is currently in view
  useEffect(() => {
    const sections = TABS.map((t) => document.getElementById(t.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="nav">
      <div className="nav-inner container">
        <div className="nav-brand">
          <span className="dot dot-red" />
          <span className="dot dot-amber" />
          <span className="dot dot-green" />
          <span className="brand-name">yeshini.dev</span>
        </div>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`tabs ${open ? "tabs-open" : ""}`}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`tab ${active === tab.id ? "tab-active" : ""}`}
              onClick={() => handleClick(tab.id)}
            >
              <span className="tab-unsaved" aria-hidden="true">
                {active === tab.id ? "●" : ""}
              </span>
              {tab.file}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}