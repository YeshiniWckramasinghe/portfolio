import "./Skills.css";

const FOLDERS = [
  {
    name: "frontend/",
    files: ["HTML.html", "CSS.css", "JavaScript.js", "React.jsx"],
  },
  {
    name: "backend/",
    files: ["Node.js", "MongoDB.db"],
  },
  {
    name: "languages/",
    files: ["Python.py", "Java.java"],
  },
  {
    name: "tooling/",
    files: ["GitHub.git"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <span className="eyebrow">Skills.jsx</span>
        <h2 className="section-title">
          What's in my <span className="accent">stack</span>
        </h2>

        <div className="explorer">
          {FOLDERS.map((folder) => (
            <div className="folder" key={folder.name}>
              <div className="folder-name">
                <span className="chevron">▾</span> {folder.name}
              </div>
              <ul className="file-list">
                {folder.files.map((file) => (
                  <li key={file} className="file-item">
                    <span className="file-dot" />
                    {file}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
