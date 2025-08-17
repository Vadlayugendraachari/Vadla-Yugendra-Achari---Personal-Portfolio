# Vadla Yugendra Achari — Personal Portfolio

Modern portfolio built with React, Vite, Tailwind CSS, Framer Motion, and TypeScript. Fully responsive with dark/light mode, smooth scroll, glassmorphism cards, and animated sections.

## 👀 Preview

![Portfolio Screenshot](public/yugi%20portfolio.png)

### Screenshots

| Home / Hero | Projects |
|---|---|
| <img src="public/yugi%20portfolio.png" alt="Hero" width="600" /> | <img src="public/community%20forum.png" alt="Community Forum" width="600" /> |

## ✨ Features
- React + Vite + TypeScript
- Tailwind CSS design system (typography, forms plugins)
- Framer Motion animations (on-scroll reveal, subtle transitions)
- Sticky navbar with smooth scroll and active states
- Dark/Light mode toggle with preference persistence
- Sections: Hero, About, Skills, Projects, Research, Education, Certifications, Contact
- Downloadable resume (public/resume.pdf)
- Accessible, responsive UI across mobile/tablet/desktop

## 🚀 Getting Started

Prerequisites: Node.js 18+

Install and run dev server:

```bash
npm install
npm run dev
```

Build and preview production:

```bash
npm run build
npm run preview
```

## 🛠️ Project Structure

- `src/components/` — UI sections and shared components
- `src/App.tsx` — layout, theme management, section composition
- `src/styles.css` — Tailwind layers + small utility classes
- `public/` — static assets (images, resume, cert PDFs)

## 🔧 Customize

1) Identity & Socials
- `src/components/Hero.tsx`: update tagline, GitHub, LinkedIn links
- `src/components/Contact.tsx`: email and links; optional Formspree setup below

2) Assets
- Replace `public/profile-placeholder.jpg` with your photo
- Add project images to `public/projects/`
- Place your resume as `public/resume.pdf`

3) Projects
- Edit `src/components/Projects.tsx` to update titles, stacks, descriptions, links, and images

4) Skills
- Edit `src/components/Skills.tsx` to adjust skill names, levels, and icons

5) Education & Marks
- Edit `src/components/Education.tsx` to set periods and `marks` badges

6) Certifications (with PDF proof)
- Edit `src/components/Certifications.tsx` (name, issuer, year, proofUrl)
- Drop certificate PDFs in `public/certs/` and point `proofUrl` to them

## ✉️ Contact Form (Optional via Formspree)

1) Create a Formspree form and copy its ID (e.g., `abcdefgh`)
2) Create `.env.local` in project root:

```bash
VITE_FORMSPREE_ID=abcdefgh
VITE_CONTACT_EMAIL=you@example.com
```

3) Restart dev server. In production, set these env vars in your hosting platform.

If `VITE_FORMSPREE_ID` isn’t provided, the form falls back to a prefilled `mailto:` to `VITE_CONTACT_EMAIL`.

## 🧪 Quality
- TypeScript + Vite build verification
- Lightweight accessibility checks (semantic HTML, labels, focusable controls)

## 🌐 Deploy
Any static hosting works (Netlify, Vercel, GitHub Pages):

1) Build: `npm run build`
2) Deploy folder: `dist/`

For GitHub Pages via Actions, add a workflow that uploads `dist` after build.

## 📄 License
This project is for personal portfolio use. You can adapt it for your own portfolio.

