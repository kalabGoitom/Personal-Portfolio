import React from "react";
import "../styles/Contact.css";

const contactLinks = [
  {
    id: 1,
    name: "Email",
    value: "kalabgoitommerese@gmail.com",
    href: "mailto:kalabgoitommerese@gmail.com",
    icon: "fas fa-envelope",
  },
  {
    id: 2,
    name: "GitHub",
    value: "@kalabGoitom",
    href: "https://github.com/kalabGoitom",
    icon: "fab fa-github",
    external: true,
  },
  {
    id: 3,
    name: "LinkedIn",
    value: "Kalab Goitom",
    href: "https://www.linkedin.com/in/kalab-goitom-6055a03b8/",
    icon: "fab fa-linkedin-in",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <span className="section-number reveal">04 / Contact</span>

        <h2 className="section-title reveal">Let's Work Together</h2>

        <p className="section-intro reveal">
          I'm currently available for freelance projects and open to full-time
          opportunities. Let's chat about your next idea.
        </p>

        <div className="contact-content">
          <div className="contact-links">
            {contactLinks.map((link, index) => (
              <a
                key={link.id}
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noopener noreferrer" : ""}
                className={`contact-link reveal`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="link-content">
                  <span className="link-name">{link.name}</span>
                  <span className="link-value">{link.value}</span>
                </div>
                <span className="link-icon">
                  <i className={`${link.icon}`}></i>
                </span>
              </a>
            ))}
          </div>

          <div className="contact-note reveal">
            <p>
              Whether you're looking to build a new project, improve an existing
              one, or just want to connect—feel free to reach out. I'm always
              excited to meet new people and collaborate on interesting ideas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
