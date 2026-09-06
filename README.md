# Yeshini Wickramasinghe — Portfolio Website

A single-page developer portfolio built with **React** and **Vite**, styled around a code-editor theme — a tab-bar navigation that mimics open editor tabs, a syntax-highlighted hero section, and a file-explorer-style skills layout.

**Live site:** [portfolio-lyart-nu-19.vercel.app](https://portfolio-lyart-nu-19.vercel.app)

## Overview

This portfolio showcases my background as an IT undergraduate and full-stack developer, including my technical skills, featured projects, freelance services, and contact details. The design intentionally borrows visual language from code editors (tabs, line numbers, terminal windows, file trees) to reflect the kind of work I do.

## Sections

- **Home** — Introduction and a quick snapshot of my tech stack
- **About** — Background and areas of focus
- **Skills** — Frontend, backend, languages, and tooling, organized like a file explorer
- **Projects** — Featured work with tech stack tags and GitHub links
- **Services** — Freelance services offered
- **Contact** — Direct links (email, LinkedIn, GitHub) and a working contact form

## Tech Stack

- **React** — UI library
- **Vite** — build tool and dev server
- **Plain CSS** — custom design system (no framework)
- **Formspree** — contact form submissions

## Getting Started

```bash
git clone https://github.com/YeshiniWckramasinghe/portfolio.git
cd portfolio
npm install
npm run dev
```

The site will be available at `http://localhost:5173`.

To create a production build:

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Nav.jsx        # Tab-bar navigation
│   ├── Hero.jsx        # Landing section
│   ├── About.jsx        # About section
│   ├── Skills.jsx        # Skills / file-explorer section
│   ├── Projects.jsx        # Project showcase
│   ├── Services.jsx        # Freelance services
│   ├── Contact.jsx        # Contact links + form
│   └── Footer.jsx
├── App.jsx
└── index.css        # Design tokens and global styles
```

## Contact Form

The contact form submits directly to [Formspree](https://formspree.io), so messages sent through the site are delivered straight to my inbox.

## Deployment

This project is deployed on [Vercel](https://vercel.com), connected to the `main` branch of this repository. Every push to `main` triggers an automatic redeploy.

## Contact

- Email: yeshiniarchana@gmail.com
- LinkedIn: [linkedin.com/in/yeshini](http://linkedin.com/in/yeshini)
- GitHub: [github.com/YeshiniWckramasinghe](https://github.com/YeshiniWckramasinghe)