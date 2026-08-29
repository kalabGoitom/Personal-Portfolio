import React, { useEffect, useState } from 'react'
import '../styles/Footer.css'

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            © {year} Kalab Goitom. All rights reserved.
          </p>
          <p className="footer-note">
            Designed & built with care.
          </p>
        </div>
      </div>
    </footer>
  )
}
