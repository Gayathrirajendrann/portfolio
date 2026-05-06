import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const roles = ['AI Engineer', 'LLM Specialist', 'RAG Architect', 'Multi-Agent Builder']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const timeout = useRef(null)

  useEffect(() => {
    const current = roles[roleIdx]
    if (!deleting && displayed.length < current.length) {
      timeout.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout.current = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx((roleIdx + 1) % roles.length)
    }
    return () => clearTimeout(timeout.current)
  }, [displayed, deleting, roleIdx])

  return (
    <section className="hero">
      <div className="hero-orb orb" style={{ width: 500, height: 500, background: 'rgba(124,58,237,0.18)', top: -100, right: -100 }} />
      <div className="hero-orb orb" style={{ width: 400, height: 400, background: 'rgba(6,182,212,0.12)', bottom: -50, left: -100, animationDelay: '2s' }} />
      <div className="hero-orb orb" style={{ width: 300, height: 300, background: 'rgba(244,114,182,0.1)', top: '40%', left: '30%', animationDelay: '4s' }} />

      <div className="container hero-inner">
        <div className="hero-badge">
          <span className="badge-dot" />
          Available for opportunities
        </div>

        <h1 className="hero-name">
          Hi, I'm <span className="name-grad">Gayathri R</span>
        </h1>

        <div className="hero-role-wrap">
          <span className="hero-role">{displayed}</span>
          <span className="cursor">|</span>
        </div>

        <p className="hero-desc">
          Building intelligent systems powered by <strong>Large Language Models</strong>,
          <strong> Retrieval-Augmented Generation</strong>, and <strong>multi-agent architectures</strong>.
          I design end-to-end AI solutions that are reliable, efficient, and production-ready.
        </p>

        <div className="hero-pills">
          {['LangGraph', 'CrewAI', 'FastAPI', 'FAISS', 'PyTorch', 'AWS'].map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        <div className="hero-ctas">
          <a href="#projects" className="btn btn-primary" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
            View Projects ↓
          </a>
          <a href="https://github.com/Gayathrirajendrann" target="_blank" rel="noreferrer" className="btn btn-outline hero-gh">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://www.linkedin.com/in/gayathri-rajendran-2590b527b" target="_blank" rel="noreferrer" className="social-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
          <a href="https://github.com/Gayathrirajendrann" target="_blank" rel="noreferrer" className="social-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
          <a href="https://mail.google.com/mail/?view=cm&to=gayathrirajendran3967@gmail.com" target="_blank" rel="noreferrer" className="social-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Email
          </a>
        </div>
      </div>


    </section>
  )
}
