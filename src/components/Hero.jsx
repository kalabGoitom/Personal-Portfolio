import React from "react";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <span className="section-number">00 / Hero</span>

          <h1 className="hero-title reveal">
            Fullstack developer crafting clean, high-performance web
            experiences.
          </h1>

          <p className="hero-subtitle reveal">
            I build fast, accessible, and user-centered digital products. Based
            in Addis Ababa, Ethiopia.
          </p>

          <div className="hero-cta reveal">
            <a href="#work" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn">
              Get In Touch
            </a>
          </div>

          <div className="hero-meta reveal">
            <div className="meta-item">
              <span className="meta-label">Available for</span>
              <span className="meta-value">Freelance & Full-time</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Based in</span>
              <span className="meta-value">Addis Ababa, 🇪🇹</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
