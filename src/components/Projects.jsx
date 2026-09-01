import "./Projects.css";

const PROJECTS = [
  {
    hash: "a3f9c1",
    name: "Seagills Lanka — Food Delivery System",
    desc: "A centralized platform to manage all parcel delivery operations — customers place delivery requests and track items in real time, while delivery staff and admins coordinate tasks for faster, accurate service.",
    stack: ["MongoDB", "Express", "Angular", "React", "Node.js"],
    github: "https://github.com/YeshiniWckramasinghe/Seagills-Lanka-foodDelivery-system",
    demo: "#",
  },
  {
    hash: "7be201",
    name: "UniMart — Student Marketplace",
    desc: "A marketplace where university students can buy and sell items within campus, with listings, search, and messaging between buyers and sellers.",
    stack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/YeshiniWckramasinghe/UniMart",
    demo: "#",
  },
  {
    hash: "d418e7",
    name: "Wildlife Safari Management System",
    desc: "Contributed to requirements analysis and system design — use case diagrams, CRC cards, and class diagrams — and helped build modules for user management, booking, payments, and notifications.",
    stack: ["HTML", "CSS", "PHP", "Git", "GitHub"],
    github: "https://github.com/YeshiniWckramasinghe/Jungle-Book-Safari-Tours",
    demo: "#",
  },
  {
    hash: "f02c56",
    name: "Rental Vehicle Management System",
    desc: "Implemented booking management and vehicle maintenance scheduling features, and took part in system testing, debugging, and technical documentation to keep the system reliable.",
    stack: ["HTML", "CSS3", "JavaScript", "Java", "MySQL", "Git", "GitHub"],
    github: "https://github.com/YeshiniWckramasinghe/DriveSwift-Java-Online-Vehicle-Rental-System-",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <span className="eyebrow">Projects.jsx</span>
        <h2 className="section-title">
          Things I've <span className="accent">built</span>
        </h2>

        <div className="project-grid">
          {PROJECTS.map((p) => (
            <article className="project-card" key={p.hash}>
              <div className="project-top">
                <span className="commit-hash">#{p.hash}</span>
                <div className="project-links">
                  <a href={p.github} target="_blank" rel="noreferrer">Code</a>
                  {p.demo !== "#" && (
                    <a href={p.demo} target="_blank" rel="noreferrer">Demo</a>
                  )}
                </div>
              </div>
              <h3 className="project-name">{p.name}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-stack">
                {p.stack.map((s) => (
                  <span key={s} className="stack-tag">{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}