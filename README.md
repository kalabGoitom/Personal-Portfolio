# Kalab · Frontend Developer Portfolio

A modern, Farm.js-inspired portfolio website built with React + Vite. Pure black background, clean typography, and high-contrast design focused on content.

## 🎨 Design Highlights

- **Pure black + white aesthetic** — No accent colors, minimal styling
- **Numbered sections** (00/ Hero, 01/ About, 02/ Work, 03/ Stack, 04/ Contact) following Farm.js visual language
- **Text-focused hero** — Clean, bold headlines with generous whitespace
- **Fully responsive** — Mobile, tablet, and desktop optimized
- **Smooth animations** — Subtle scroll-triggered reveals
- **Dark mode only** — Modern, premium feel
- **Accessible** — Semantic HTML, keyboard navigation, focus states

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm (or pnpm/yarn)

### Installation

```bash
cd kalab-portfolio
npm install
```

### Development

```bash
npm run dev
```

Opens http://localhost:5173 in your browser. Hot module reloading enabled.

### Production Build

```bash
npm run build
```

Outputs optimized files to `dist/` directory.

### Preview Built Site

```bash
npm run preview
```

## 📁 Project Structure

```
kalab-portfolio/
├── index.html                 # Entry point
├── src/
│   ├── main.jsx              # React root
│   ├── App.jsx               # Main component
│   ├── components/           # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Stack.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   └── styles/               # Component styles
│       ├── index.css         # Global styles
│       ├── Header.css
│       ├── Hero.css
│       ├── About.css
│       ├── Projects.css
│       ├── Stack.css
│       ├── Contact.css
│       └── Footer.css
├── package.json
├── vite.config.js
└── README.md
```

## 🛠 Tech Stack

- **React 18** — UI library
- **Vite 5** — Build tool & dev server
- **CSS3** — No frameworks, pure CSS with custom properties
- **JavaScript (ES6+)** — Modern syntax, no transpilation needed

## 🎯 Customization

### Update Your Information

- **Hero**: Edit `Hero.jsx` for headline, tagline, and metadata
- **About**: Update `About.jsx` with your bio and stats
- **Projects**: Modify the `projects` array in `Projects.jsx`
- **Stack**: Edit the `skillCategories` array in `Stack.jsx`
- **Contact**: Update links in `Contact.jsx`

### Change Colors

Edit CSS variables in `src/styles/index.css`:

```css
:root {
  --color-bg: #000000;
  --color-text: #ffffff;
  --color-text-secondary: #999999;
  --color-border: #1a1a1a;
}
```

### Modify Typography

Adjust font sizes and weights in `src/styles/index.css`:

```css
--font-size-5xl: 4.5rem;
--font-weight-bold: 700;
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

Follow the prompts. Automatic deployments on git push.

### Deploy to Netlify

1. Build locally: `npm run build`
2. Drag & drop `dist/` folder to Netlify, or
3. Connect your Git repo to Netlify for automatic deployments

### Deploy to Other Hosts

Upload the `dist/` folder contents to your hosting provider (GitHub Pages, AWS S3, etc.).

## 📊 Performance

- **Dev start**: ~250ms (with Vite)
- **Build size**: ~25KB gzipped
- **LCP**: < 1.5s
- **Fully responsive** from 320px to 4K+

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Respects `prefers-reduced-motion`
- High contrast text (white on black)

## 📝 License

Free to use and modify for personal or commercial projects.

## 🤝 Questions?

Reach out via email or GitHub for questions about the codebase or design decisions.

---

**Built with ❤️ from Addis Ababa, Ethiopia**
