/* ── DATA ────────────────────────────────────────────── */

/* Tech stack — logo URLs from CDN / official sources */
const techs = [
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    name: "HTML5",
    level: "Expert",
    color: "#e34f26",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    name: "CSS3",
    level: "Expert",
    color: "#1572b6",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    name: "JavaScript",
    level: "Advanced",
    color: "#f7df1e",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    name: "React",
    level: "Advanced",
    color: "#61dafb",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    name: "Firebase",
    level: "Intermediate",
    color: "#ffca28",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    name: "Python",
    level: "Intermediate",
    color: "#3776ab",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    name: "Git",
    level: "Advanced",
    color: "#f05032",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    name: "GitHub",
    level: "Advanced",
    color: "#ffffff",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    name: "Figma",
    level: "Intermediate",
    color: "#f24e1e",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    name: "Node.js",
    level: "Intermediate",
    color: "#339933",
  },
];

/* Projects — Unsplash real images */
const projects = [
  {
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop",
    tag: "SaaS · 2026",
    title: "Mini Storefront Builder",
    desc: "A tool that lets small businesses create a shareable one-page product/service showcase. Powered by Firebase.",
    links: true,
  },
  {
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&auto=format&fit=crop",
    tag: "Client Work · 2025",
    title: "HH Consulting Portfolio",
    desc: "A full single-page portfolio site for an architectural & engineering firm based in Addis Ababa, Ethiopia.",
    links: true,
  },
  {
    img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&auto=format&fit=crop",
    tag: "Academic · 2025",
    title: "BST Bank System",
    desc: "A menu-driven Python bank account management system built on a Binary Search Tree with 8 core operations.",
    links: false,
  },
  {
    img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&auto=format&fit=crop",
    tag: "Practice · 2025",
    title: "To-Do App",
    desc: "A clean task management app with local persistence, drag-to-reorder, and priority labels.",
    links: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop",
    tag: "Freelance",
    title: "Dashboard UI",
    desc: "A responsive admin dashboard with real-time chart widgets, dark/light mode, and custom data tables.",
    links: true,
  },
  {
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop",
    tag: "Coming Soon",
    title: "Next Project",
    desc: "Something exciting is in the works. Check back soon or reach out if you want early access.",
    links: false,
  },
];

const marqueeItems = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Firebase",
  "Python",
  "Responsive Design",
  "Web Animations",
  "Figma",
  "Git & GitHub",
];

/* ── RENDER MARQUEE ──────────────────────────────────── */
function renderMarquee() {
  const track = document.getElementById("marqueeTrack");
  const doubled = [...marqueeItems, ...marqueeItems];
  track.innerHTML = doubled
    .map(
      (t) =>
        `<div class="marquee-item"><i class="fa-solid fa-diamond"></i>${t}</div>`,
    )
    .join("");
}

/* ── RENDER TECH GRID ────────────────────────────────── */
function renderTech() {
  document.getElementById("techGrid").innerHTML = techs
    .map(
      (t, i) => `
    <div class="tech-item reveal" style="transition-delay:${i * 0.05}s; --tech-color:${t.color}">
      <div class="tech-logo-wrap">
        <img src="${t.logo}" alt="${t.name} logo" class="tech-logo" loading="lazy" />
      </div>
      <div class="tech-name">${t.name}</div>
      <div class="tech-level">${t.level}</div>
    </div>
  `,
    )
    .join("");
}

/* ── RENDER PROJECTS ─────────────────────────────────── */
function renderProjects() {
  document.getElementById("projectsGrid").innerHTML = projects
    .map(
      (p, i) => `
    <div class="project-card reveal" style="transition-delay:${(i % 3) * 0.1}s">
      <div class="project-thumb">
        <img src="${p.img}" alt="${p.title}" loading="lazy" />
        <div class="project-thumb-overlay"></div>
        <span class="project-tag-badge">${p.tag}</span>
      </div>
      <div class="project-body">
        <div class="project-title">${p.title}</div>
        <div class="project-desc">${p.desc}</div>
        <div class="project-footer">
          ${
            p.links
              ? `<button class="btn-sm btn-sm-primary">
                 <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
               </button>
               <button class="btn-sm btn-sm-ghost">
                 <i class="fa-brands fa-github"></i> GitHub
               </button>`
              : `<button class="btn-sm btn-sm-ghost" disabled style="opacity:.5;cursor:default;">
                 <i class="fa-solid fa-clock"></i> Coming Soon
               </button>`
          }
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

/* ── SCROLL REVEAL ───────────────────────────────────── */
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  const gridObserver = new MutationObserver(() => {
    document
      .querySelectorAll(".reveal:not(.visible)")
      .forEach((el) => observer.observe(el));
  });
  gridObserver.observe(document.getElementById("techGrid"), {
    childList: true,
  });
  gridObserver.observe(document.getElementById("projectsGrid"), {
    childList: true,
  });
}

/* ── STICKY HEADER ───────────────────────────────────── */
function initStickyHeader() {
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  });
}

/* ── THEME TOGGLE ────────────────────────────────────── */
function initTheme() {
  const html = document.documentElement;

  function setTheme(t) {
    html.setAttribute("data-theme", t);
    document.querySelectorAll(".theme-btn").forEach((btn) => {
      btn.innerHTML =
        t === "dark"
          ? '<i class="fa-solid fa-moon"></i>'
          : '<i class="fa-solid fa-sun"></i>';
    });
    localStorage.setItem("theme", t);
  }

  function toggleTheme() {
    setTheme(html.dataset.theme === "dark" ? "light" : "dark");
  }

  const saved =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark");
  setTheme(saved);

  document.querySelectorAll(".theme-btn").forEach((btn) => {
    btn.addEventListener("click", toggleTheme);
  });
}

/* ── HAMBURGER / MOBILE MENU ─────────────────────────── */
function initMobileMenu() {
  const ham = document.getElementById("hamburger");
  const mob = document.getElementById("mobileMenu");

  function closeMenu() {
    ham.classList.remove("open");
    mob.classList.remove("open");
    document.body.style.overflow = "";
  }

  ham.addEventListener("click", () => {
    const isOpen = mob.classList.toggle("open");
    ham.classList.toggle("open", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  document.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

/* ── CURSOR GLOW (desktop only) ──────────────────────── */
function initCursorGlow() {
  const glow = document.getElementById("cursorGlow");
  if (window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener("mousemove", (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    });
  } else {
    glow.style.display = "none";
  }
}

/* ── CONTACT FORM ────────────────────────────────────── */
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector("button[type=submit]");
  btn.innerHTML = '<i class="fa-solid fa-check"></i> Message Sent!';
  btn.style.background = "#22c55e";
  setTimeout(() => {
    btn.innerHTML = 'Send Message <i class="fa-solid fa-paper-plane"></i>';
    btn.style.background = "";
    e.target.reset();
  }, 3000);
}
const footerYear = document.getElementById("year");
function getYear() {
  const year = new Date().getFullYear();

  footerYear.textContent = year;
}

/* ── INIT ────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  renderMarquee();
  renderTech();
  renderProjects();
  initReveal();
  initStickyHeader();
  initTheme();
  initMobileMenu();
  initCursorGlow();
  getYear();
});
