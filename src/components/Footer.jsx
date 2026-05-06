import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-line" />
      <div className="container footer-inner">
        <div className="footer-logo">
          <span className="footer-tagline">AI Engineer · LLMs · RAG · Multi-Agent Systems</span>
        </div>
        <div className="footer-links">
          {[
            { label: 'GitHub', href: 'https://github.com/Gayathrirajendrann' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gayathri-rajendran-2590b527b' },
            { label: 'Email', href: 'mailto:gayathrirajendran3967@gmail.com' },
          ].map(l => (
            <a key={l.label} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="footer-link">
              {l.label}
            </a>
          ))}
        </div>
        <p className="footer-copy">© 2026 Gayathri R</p>
      </div>
    </footer>
  )
}
