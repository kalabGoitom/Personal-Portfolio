import React from 'react'
import '../styles/Stack.css'

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'Prisma']
  },
  {
    category: 'Tools & Other',
    skills: ['Git', 'GitHub', 'Figma', 'Python']
  }
]

export default function Stack() {
  return (
    <section id="stack" className="stack">
      <div className="container">
        <span className="section-number reveal">03 / Stack</span>

        <h2 className="section-title reveal">
          Technologies & Tools
        </h2>

        <p className="section-intro reveal">
          The modern technologies I use to build fast, accessible, and scalable web experiences.
        </p>

        <div className="stack-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className={`skill-category reveal`} style={{ animationDelay: `${idx * 100}ms` }}>
              <h3 className="category-title">{category.category}</h3>
              <ul className="skills-list">
                {category.skills.map(skill => (
                  <li key={skill} className="skill-item">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
