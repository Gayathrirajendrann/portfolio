import { useState, useEffect } from 'react'
import './Navbar.css'
import photo from "../assets/photo1.jpg";

const links = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setOpen(false)
    setActive(id)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner container">
        <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={photo} alt="Gayathri R" className="nav-photo" />
          <div className="nav-logo-text">
            <span className="nav-name">GAYATHRI R</span>
            <span className="nav-role">Aspiring AI/ML Engineer</span>
          </div>
        </div>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l}>
              <button
                className={`nav-link ${active === l ? 'active' : ''}`}
                onClick={() => scrollTo(l)}
              >{l}</button>
            </li>
          ))}
          <li>
            <a href="https://mail.google.com/mail/?view=cm&to=gayathrirajendran3967@gmail.com" target="_blank" rel="noreferrer" className="btn btn-primary nav-cta">Hire Me</a>
          </li>
        </ul>
        <button className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
