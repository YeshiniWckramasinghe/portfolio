import "./About.css";

const TAGS = ["IT Undergraduate", "Freelance Developer", "Sri Lanka", "Open to Work"];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <span className="eyebrow">About.jsx</span>
        <h2 className="section-title">
          A little <span className="accent">about me</span>
        </h2>

        <div className="code-block">
          <div className="code-row">
            <span className="line-no">01</span>
            <p>
              I'm an IT undergraduate who enjoys turning ideas into working
              software — mostly web apps, mostly full-stack. I like the part
              of development where a messy requirement becomes a clean,
              usable interface, and I care about writing code that the next
              developer (often future me) can actually read.
            </p>
          </div>

          <div className="code-row">
            <span className="line-no">02</span>
            <p>
              Outside coursework, I take on freelance and personal projects
              to keep building things end to end — from database design to
              the last pixel of the UI. I'm comfortable working solo with a
              client directly, or slotting into an existing codebase.
            </p>
          </div>

          <div className="code-row">
            <span className="line-no">03</span>
            <div className="tag-row">
              {TAGS.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
