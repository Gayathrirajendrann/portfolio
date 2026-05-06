import './Experience.css'

const experiences = [
  {
    role: 'Web Scraping Intern',
    company: 'AgriSakthi',
    period: 'Nov 2025 – 2026',
    color: 'cyan',
    icon: '🌾',
    points: [
      'Built ETL pipelines scraping data from 10+ eCommerce platforms',
      'Used Selenium, Playwright, and proxy handling for robust extraction',
      'Processed data for AI/ML analytics pipelines',
    ],
  },
  {
    role: 'NLP Intern',
    company: 'NIT Trichy',
    period: 'Jun – Jul 2025',
    color: 'purple',
    icon: '🔬',
    points: [
      'Developed RAG-based news QA system using real-time APIs',
      'Designed NLP preprocessing and embedding retrieval pipeline',
      'Built interactive app using Streamlit',
    ],
  },
]

export default function Experience() {
  return (
    <section className="section exp-section" id="experience">
      <div className="container">
        <p className="section-eyebrow">// Where I've worked</p>
        <h2 className="section-title">Experience</h2>
        <p className="section-sub">Internships that shaped my engineering mindset.</p>

        <div className="timeline">
          {experiences.map((e, i) => (
            <div key={e.company} className={`timeline-item ${e.color}`}>
              <div className="timeline-dot">
                <span>{e.icon}</span>
              </div>
              <div className="timeline-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{e.role}</h3>
                    <p className="exp-company">{e.company}</p>
                  </div>
                  <span className={`exp-period tag ${e.color === 'cyan' ? 'cyan' : ''}`}>{e.period}</span>
                </div>
                <ul className="exp-points">
                  {e.points.map(p => (
                    <li key={p}><span className="exp-bullet" />{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
