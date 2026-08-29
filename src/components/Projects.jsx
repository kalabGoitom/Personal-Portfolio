import React from 'react'
import '../styles/Projects.css'

const projects = [
  {
    id: 1,
    name: 'TaskFlow',
    description: 'A sleek task management app with drag-and-drop, local storage, and priority labels.',
    tags: ['React', 'JavaScript', 'Local Storage'],
    live: 'https://taskflow-green-two.vercel.app/',
    github: 'https://github.com/kalabGoitom/TaskFlow'
  },
  {
    id: 2,
    name: 'HH Consulting',
    description: 'Full single-page portfolio site for an architectural & engineering firm in Addis Ababa.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://hhconsulting-jet.vercel.app/',
    github: 'https://github.com/kalabGoitom/-HH-Consulting-Architects-and-Engineers-PLC.'
  },
  {
    id: 3,
    name: 'ForgeApp',
    description: 'Mobile-first workout tracking app with exercise logging and progress monitoring.',
    tags: ['JavaScript', 'Mobile', 'Responsive'],
    live: 'https://forgeapp101.netlify.app/',
    github: 'https://github.com/kalabGoitom/ForgeApp'
  },
  {
    id: 4,
    name: 'Expense Tracker',
    description: 'Minimalist expense tracker for logging, summaries, and budget management.',
    tags: ['JavaScript', 'Vanilla JS', 'Storage'],
    live: 'https://expensetrackerv20.netlify.app/',
    github: 'https://github.com/kalabGoitom/Expense-Tracker'
  }
]

export default function Projects() {
  return (
    <section id="work" className="projects">
      <div className="container">
        <span className="section-number reveal">02 / Work</span>

        <h2 className="section-title reveal">
          Featured Projects
        </h2>

        <p className="section-intro reveal">
          A selection of projects that showcase my approach to clean code, responsive design, and user-centered development.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={project.id} className={`project-card reveal`} style={{ animationDelay: `${index * 100}ms` }}>
              <div className="project-header">
                <h3 className="project-name">{project.name}</h3>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-footer">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                  <span>Live Demo</span>
                  <i className="fas fa-arrow-up-right-from-square"></i>
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <span>GitHub</span>
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
