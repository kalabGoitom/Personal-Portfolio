import React from 'react'
import '../styles/About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <span className="section-number reveal">01 / About</span>

        <h2 className="section-title reveal">
          Who I am
        </h2>

        <div className="about-content">
          <div className="about-text reveal">
            <p>
              I'm a frontend developer passionate about building clean, responsive, and accessible web experiences. I specialize in turning complex problems into elegant, performant interfaces that users love.
            </p>

            <p>
              With a focus on semantic HTML, modern CSS, and JavaScript, I create digital products that prioritize both aesthetics and usability. Currently, I'm deepening my knowledge of full-stack development—exploring backend systems with Node.js, Express, and PostgreSQL—while continuing to push the boundaries of what's possible on the web.
            </p>

            <p>
              I'm based in Addis Ababa, Ethiopia, and work with clients across East Africa and globally. When I'm not coding, you'll find me exploring new UI trends, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="about-stats reveal">
            <div className="stat-box">
              <div className="stat-number">4+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">1+</div>
              <div className="stat-label">Clients</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">1+</div>
              <div className="stat-label">Years exp.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
