# Portfolio Website

React + Vite වලින් හදපු single-page developer portfolio එකක්. Design theme එක code-editor එකක් style — tab bar navigation, syntax-highlighted hero, file-explorer style skills section.

## Run locally

```bash
npm install
npm run dev
```

## Edit your details

- `src/components/Hero.jsx` — name, role, intro, tech stack object
- `src/components/About.jsx` — about paragraph + tags
- `src/components/Skills.jsx` — `FOLDERS` array
- `src/components/Projects.jsx` — `PROJECTS` array (name, description, tech, links)
- `src/components/Services.jsx` — `SERVICES` array
- `src/components/Contact.jsx` — `LINKS` array (email / LinkedIn / GitHub)
- `index.html` — page `<title>`

## Contact form

The form in `Contact.jsx` currently only shows a confirmation message locally — it doesn't send anywhere yet. To actually receive messages, connect it to a free service like:

- [Formspree](https://formspree.io) — easiest, just point the form action at a Formspree endpoint
- [EmailJS](https://www.emailjs.com) — sends straight from the browser via their JS SDK

## Deploy

Free options that work well with a Vite project:

- **Vercel** — `npm i -g vercel` then `vercel` in the project folder
- **Netlify** — drag the `dist/` folder (after `npm run build`) into Netlify, or connect the GitHub repo
- **GitHub Pages** — use the `gh-pages` package or GitHub Actions
