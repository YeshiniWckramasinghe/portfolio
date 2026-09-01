import "./Hero.css";

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">intro.js</span>
          <h1 className="hero-title">
            Hi, I'm <span className="accent-amber">Yeshini Wickramasinghe</span>.
            <br />
            IT Undergraduate &amp; Full-Stack Developer.
          </h1>
          <p className="hero-sub">
            I build clean, responsive web apps — from React front-ends to
            Node &amp; MongoDB back-ends — and I take on freelance projects
            for clients who need reliable, well-documented code.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => scrollTo("projects")}>
              View My Work
            </button>
            <button className="btn btn-ghost" onClick={() => scrollTo("contact")}>
              Contact Me
            </button>
          </div>
        </div>

        <div className="hero-window" aria-hidden="true">
          <div className="window-bar">
            <span className="dot dot-red" />
            <span className="dot dot-amber" />
            <span className="dot dot-green" />
            <span className="window-title">developer.js</span>
          </div>
          <pre className="window-code">
<span className="tok-comment">// currently available for freelance work</span>{"\n"}
<span className="tok-key">const</span> <span className="tok-var">developer</span> = {"{"}
{"\n  "}<span className="tok-prop">name</span>: <span className="tok-str">"Yeshini Wickramasinghe"</span>,
{"\n  "}<span className="tok-prop">role</span>: <span className="tok-str">"Full-Stack Developer"</span>,
{"\n  "}<span className="tok-prop">stack</span>: [<span className="tok-str">"React"</span>, <span className="tok-str">"Node.js"</span>, <span className="tok-str">"MongoDB"</span>, <span className="tok-str">"Python"</span>, <span className="tok-str">"Java"</span>],
{"\n  "}<span className="tok-prop">basedIn</span>: <span className="tok-str">"Sri Lanka"</span>,
{"\n  "}<span className="tok-prop">available</span>: <span className="tok-bool">true</span>,
{"\n"}{"}"};<span className="caret">▍</span>
          </pre>
        </div>
      </div>
    </section>
  );
}