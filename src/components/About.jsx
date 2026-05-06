import './About.css'
import photo from "../assets/photo1.jpg";

const stats = [
  { value: '12+', label: 'Projects Built' },
  { value: '2', label: 'Internships' },
  { value: '8.13', label: 'CGPA' },
  { value: 'AWS', label: 'Certified' },
]

const interests = [
  { icon: '🤖', label: 'Multi-Agent AI (LangGraph, CrewAI)' },
  { icon: '🔍', label: 'Real-world LLM Applications' },
  { icon: '🛡️', label: 'AI Safety & Hallucination Reduction' },
  { icon: '⚡', label: 'Scalable Backend AI with FastAPI' },
]

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="about-bg-orb orb" />
      <div className="container">
        <p className="section-eyebrow">// Who I am</p>
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm an <span className="hl">AI Engineer</span> specializing in building intelligent systems
              powered by <span className="hl">Large Language Models (LLMs)</span>, Retrieval-Augmented
              Generation (RAG), and multi-agent architectures.
            </p>
            <p>
              I enjoy designing end-to-end AI solutions—from data pipelines and NLP processing to scalable
              API deployment. My work focuses on making AI systems <span className="hl">reliable, efficient,
              and production-ready</span>.
            </p>

            <div className="interests-grid">
              {interests.map(i => (
                <div key={i.label} className="interest-item">
                  <span className="interest-icon">{i.icon}</span>
                  <span>{i.label}</span>
                </div>
              ))}
            </div>

            <div className="about-ctas">
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              >Contact Me</a>
              <a href="https://linkedin.com/in/gayathri-rajendran" target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn ↗</a>
            </div>
          </div>

          <div className="about-right">
            <div className="avatar-container">
              <div className="avatar-ring" />
              <div className="avatar-inner">
                <img src={photo} alt="Gayathri R" className="avatar-photo" />
              </div>
              <div className="avatar-badge">AI Engineer</div>
            </div>

            <div className="stats-grid">
              {stats.map(s => (
                <div key={s.label} className="stat-card card">
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="current-card card">
              <div className="current-header">
                <span className="live-dot" />
                Currently Working On
              </div>
              <ul className="current-list">
                <li>Multi-agent AI orchestration</li>
                <li>LLM evaluation & hallucination detection</li>
                <li>Scalable AI APIs for real-world apps</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
