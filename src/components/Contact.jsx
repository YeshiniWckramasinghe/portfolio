import { useState } from "react";
import "./Contact.css";

const LINKS = [
  { label: "email", value: "yeshiniarchana@gmail.com", href: "mailto:yeshiniarchana@gmail.com" },
  { label: "linkedin", value: "linkedin.com/in/yeshini", href: "http://linkedin.com/in/yeshini" },
  { label: "github", value: "github.com/YeshiniWckramasinghe", href: "https://github.com/YeshiniWckramasinghe" },
];

// Formspree endpoint — messages sent through the form below arrive at
// the email connected to this form on formspree.io
const FORM_ENDPOINT = "https://formspree.io/f/mzebeegd";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <span className="eyebrow">Contact.jsx</span>
        <h2 className="section-title">
          Let's <span className="accent">talk</span>
        </h2>

        <div className="contact-grid">
          <div className="contact-links">
            <p className="config-label">contact.config.js</p>
            <ul>
              {LINKS.map((l) => (
                <li key={l.label}>
                  <span className="config-key">{l.label}:</span>{" "}
                  <a href={l.href} target="_blank" rel="noreferrer" className="config-value">
                    "{l.value}"
                  </a>
                </li>
              ))}
            </ul>
            <p className="contact-note">
              Available for freelance and internship opportunities — reach out
              through any of the above, or use the form.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
              />
            </label>
            <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "sent" && (
              <p className="form-success">Thanks — I'll get back to you soon.</p>
            )}
            {status === "error" && (
              <p className="form-error">
                Something went wrong — please email me directly instead.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}