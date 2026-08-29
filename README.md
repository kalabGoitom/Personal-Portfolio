# Personal Portfolio

A modern, minimal portfolio website built with React + Vite. Clean design, smooth animations, and responsive layout showcasing my work and skills.

## 🎨 Features

- **Clean, minimalist design** — Modern aesthetic with focus on content
- **Fully responsive** — Optimized for mobile, tablet, and desktop
- **Smooth scroll animations** — Scroll-triggered reveals and transitions
- **Dark mode** — Easy on the eyes, professional appearance
- **Fast and lightweight** — Built with Vite for optimal performance
- **Accessible** — Semantic HTML, keyboard navigation, focus states
- **Easy to customize** — Simple component structure for quick updates

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm (or pnpm/yarn)

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Opens http://localhost:5173 in your browser with hot module reloading.

### Production Build

```bash
npm run build
```

Creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── main.jsx                   # React entry point
├── App.jsx                    # Main application component
├── components/                # Reusable React components
│   ├── Header.jsx            # Navigation header
│   ├── Hero.jsx              # Hero section
│   ├── About.jsx             # About me section
│   ├── Projects.jsx          # Projects showcase
│   ├── Stack.jsx             # Technology stack
│   ├── Contact.jsx           # Contact section
│   └── Footer.jsx            # Footer
├── hooks/                     # Custom React hooks
│   └── useScrollReveal.js    # Scroll animation hook
└── styles/                    # Component stylesheets
    ├── index.css             # Global styles
    ├── Header.css
    ├── Hero.css
    ├── About.css
    ├── Projects.css
    ├── Stack.css
    ├── Contact.css
    └── Footer.css
```

## 🛠 Tech Stack

- **React 18** — Modern UI library for building interactive components
- **Vite** — Fast build tool and development server
- **CSS3** — Custom styling with CSS variables and animations
- **JavaScript (ES6+)** — Modern JavaScript for interactive features

## ✏️ Customization

### Update Your Information

- **Header**: Edit [Header.jsx](src/components/Header.jsx) for navigation links
- **Hero**: Update [Hero.jsx](src/components/Hero.jsx) with your name, title, and introduction
- **About**: Customize [About.jsx](src/components/About.jsx) with your bio and achievements
- **Projects**: Modify project data in [Projects.jsx](src/components/Projects.jsx)
- **Skills**: Update technology stack in [Stack.jsx](src/components/Stack.jsx)
- **Contact**: Add your contact information in [Contact.jsx](src/components/Contact.jsx)

### Styling

Global styles are in [src/styles/index.css](src/styles/index.css). Customize:

```css
:root {
  --color-bg: #000000;
  --color-text: #ffffff;
  --color-text-secondary: #999999;
  --color-border: #1a1a1a;
}
```

Update colors, fonts, and spacing to match your personal brand.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Automatic deployments on every push

### Deploy to Netlify

1. Build the project: `npm run build`
2. Connect your Git repo to [Netlify](https://netlify.com) for automatic deployments

### Deploy to GitHub Pages

1. Update `vite.config.js` with your repository name
2. Run `npm run build`
3. Deploy the `dist/` folder to GitHub Pages

## ⚡ Performance

- **Fast build times** with Vite
- **Optimized bundle** with code splitting
- **Mobile-first design** for fast loading on all devices
- **Responsive** from mobile to desktop screens

## ♿ Accessibility

- Semantic HTML structure
- Keyboard navigation support
- High contrast text for readability
- Respects user motion preferences
- Screen reader friendly

## 📄 License

Feel free to use this portfolio template as inspiration for your own site.

## 💬 Contact

For questions or feedback, reach out through the contact section on the website.
