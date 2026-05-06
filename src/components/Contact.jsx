import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('gayathrirajendran3967@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="contact-orb orb" />
      <div className="container">
        <p className="section-eyebrow">// Let's talk</p>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-sub">Open to AI/ML roles, internships, and research collaborations.</p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-cta-text">
              <h3>Let's build something intelligent together.</h3>
              <p>Whether you have an exciting AI project, a research collaboration, or want to discuss
                cutting-edge LLM techniques — I'd love to connect!</p>
            </div>

            <div className="open-to">
              {['AI/ML Engineer Roles', 'Research Collaborations', 'Internships', 'Open Source Projects'].map(r => (
                <div key={r} className="open-item">
                  <span className="open-check">✓</span>
                  <span>{r}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-links">
            <div className="contact-card card">
              <div className="contact-method">
                <div className="cm-icon email-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </div>
                <div>
                  <p className="cm-label">Email</p>
                  <p className="cm-value">gayathrirajendran3967@gmail.com</p>
                </div>
                <button className="cm-copy btn btn-outline" onClick={copyEmail}>
                  {copied ? '✓ Copied!' : 'Copy'}
                </button>
              </div>

              <div className="contact-method">
                <div className="cm-icon phone-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.55a2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2z" /></svg>
                </div>
                <div>
                  <p className="cm-label">Phone</p>
                  <p className="cm-value">+91 7010238347</p>
                </div>
                <a href="tel:+917010238347" className="cm-copy btn btn-outline">Call</a>
              </div>

              <div className="contact-method">
                <div className="cm-icon li-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </div>
                <div>
                  <p className="cm-label">LinkedIn</p>
                  <p className="cm-value">linkedin.com/in/gayathri-rajendran-2590b527b</p>
                </div>
                <a href="https://www.linkedin.com/in/gayathri-rajendran-2590b527b" target="_blank" rel="noreferrer" className="cm-copy btn btn-outline">Visit ↗</a>
              </div>

              <div className="contact-method">
                <div className="cm-icon gh-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
                </div>
                <div>
                  <p className="cm-label">GitHub</p>
                  <p className="cm-value">github.com/Gayathrirajendrann</p>
                </div>
                <a href="https://github.com/Gayathrirajendrann" target="_blank" rel="noreferrer" className="cm-copy btn btn-outline">Visit ↗</a>
              </div>

              <a href="https://mail.google.com/mail/?view=cm&to=gayathrirajendran3967@gmail.com" target="_blank" rel="noreferrer" className="btn btn-primary contact-email-btn">
                Send Me an Email →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
