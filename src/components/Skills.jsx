import { useState } from 'react'
import './Skills.css'

const categories = [
  {
    label: 'Languages',
    icon: '💻',
    color: 'purple',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 75 },
    ]
  },
  {
    label: 'Generative AI',
    icon: '🤖',
    color: 'cyan',
    skills: [
      { name: 'LangChain', level: 88 },
      { name: 'LangGraph', level: 85 },
      { name: 'CrewAI', level: 82 },
      { name: 'RAG', level: 88 },
      { name: 'FAISS', level: 80 },
      { name: 'Prompt Engineering', level: 90 },
    ]
  },
  {
    label: 'AI / ML',
    icon: '🧠',
    color: 'pink',
    skills: [
      { name: 'PyTorch', level: 78 },
      { name: 'NLP', level: 85 },
      { name: 'Machine Learning', level: 80 },
    ]
  },
  {
    label: 'Backend',
    icon: '⚡',
    color: 'purple',
    skills: [
      { name: 'FastAPI', level: 85 },
      { name: 'REST APIs', level: 83 },
    ]
  },
  {
    label: 'Web Scraping',
    icon: '🕷️',
    color: 'cyan',
    skills: [
      { name: 'BeautifulSoup', level: 88 },
      { name: 'Selenium', level: 85 },
      { name: 'Playwright', level: 80 },
    ]
  },
  {
    label: 'Cloud & Tools',
    icon: '☁️',
    color: 'pink',
    skills: [
      { name: 'AWS EC2 & Lambda', level: 75 },
      { name: 'Streamlit', level: 82 },
      { name: 'GitHub / CI-CD', level: 80 },
      { name: 'Power BI', level: 70 },
    ]
  },
]

export default function Skills() {
  const [hovered, setHovered] = useState(null)

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <p className="section-eyebrow">// What I use</p>
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-sub">Technologies I work with to build intelligent, production-ready AI systems.</p>

        <div className="skills-grid">
          {categories.map(cat => (
            <div key={cat.label} className={`skill-card card color-${cat.color}`}>
              <div className="skill-cat-header">
                <span className="skill-cat-icon">{cat.icon}</span>
                <span className="skill-cat-label">{cat.label}</span>
              </div>
              <div className="skill-list">
                {cat.skills.map(s => (
                  <div key={s.name} className="skill-item"
                    onMouseEnter={() => setHovered(s.name)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="skill-meta">
                      <span className="skill-name">{s.name}</span>
                      <span className="skill-pct">{s.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className={`skill-fill ${hovered === s.name ? 'glow' : ''}`}
                        style={{ width: `${s.level}%`, background: cat.color === 'purple' ? 'linear-gradient(90deg,#7c3aed,#a78bfa)' : cat.color === 'cyan' ? 'linear-gradient(90deg,#0891b2,#06b6d4)' : 'linear-gradient(90deg,#be185d,#f472b6)' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
