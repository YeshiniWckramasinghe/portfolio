import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {year} Your Name. Built with React &amp; Vite.</span>
        <span className="footer-tag">{"</> with care"}</span>
      </div>
    </footer>
  );
}
