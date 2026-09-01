import "./Services.css";

const SERVICES = [
  {
    cmd: "run website-development",
    icon: "🌐",
    title: "Website Development",
    desc: "Full websites built from scratch — planning, structure, and code, ready to deploy.",
  },
  {
    cmd: "run frontend-development",
    icon: "💻",
    title: "Frontend Development",
    desc: "Interactive UIs in React or plain JS, built from designs or from a rough idea.",
  },
  {
    cmd: "run bug-fixing",
    icon: "🔧",
    title: "Bug Fixing",
    desc: "Tracking down and fixing issues in existing codebases, with clear notes on the cause.",
  },
  {
    cmd: "run responsive-design",
    icon: "📱",
    title: "Responsive Web Design",
    desc: "Layouts that work cleanly on mobile, tablet, and desktop — no breakpoints left behind.",
  },
  {
    cmd: "run api-integration",
    icon: "🔗",
    title: "API Integration",
    desc: "Connecting your app to third-party APIs or building your own for it to consume.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <span className="eyebrow">Services.jsx</span>
        <h2 className="section-title">
          How I can <span className="accent">help</span>
        </h2>

        <div className="terminal">
          <div className="window-bar">
            <span className="dot dot-red" />
            <span className="dot dot-amber" />
            <span className="dot dot-green" />
            <span className="window-title">zsh — services</span>
          </div>
          <div className="terminal-body">
            {SERVICES.map((s) => (
              <div className="term-line" key={s.cmd}>
                <div className="term-cmd">
                  <span className="prompt">➜</span> ~ npm {s.cmd}
                </div>
                <div className="term-output">
                  <span className="output-icon">{s.icon}</span>
                  <div>
                    <p className="output-title">{s.title}</p>
                    <p className="output-desc">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
