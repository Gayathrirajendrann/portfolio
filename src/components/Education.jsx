import './Education.css'

const achievements = [
  { icon: '☁️', label: 'AWS Certified Cloud Practitioner', color: 'orange' },
  { icon: '☕', label: 'NPTEL Java Certification (12 Weeks)', color: 'blue' },
  { icon: '📄', label: 'Published Research: AI-Powered Accessibility App', color: 'purple' },
  { icon: '🏆', label: 'Smart India Hackathon (SIH-2024) Finalist', color: 'yellow' },
  { icon: '🎯', label: 'Organizer – VelaanAI Hackathon 2026', color: 'cyan' },
  { icon: '♟️', label: 'Chess Runner-Up – Anna University Zonal', color: 'green' },
]

export default function Education() {
  return (
    <section className="section edu-section" id="education">
      <div className="edu-orb orb" />
      <div className="container">
        <p className="section-eyebrow">// My journey</p>
        <h2 className="section-title">Education & Achievements</h2>
        <p className="section-sub">Academic foundation and milestones that define my growth.</p>

        <div className="edu-grid">
          <div className="edu-card card">
            <div className="edu-icon-wrap">
              <span className="edu-icon">🎓</span>
            </div>
            <div className="edu-content">
              <div className="edu-badge tag">2022 – 2026</div>
              <h3 className="edu-degree">B.Tech – Artificial Intelligence & Data Science</h3>
              <p className="edu-college">Saranathan College of Engineering</p>
              <div className="cgpa-wrap">
                <span className="cgpa-label">CGPA</span>
                <div className="cgpa-bar">
                  <div className="cgpa-fill" style={{ width: '81.3%' }} />
                </div>
                <span className="cgpa-value">8.13 / 10</span>
              </div>
            </div>
          </div>

          <div className="achieve-section">
            <h3 className="achieve-title">🏆 Achievements & Certifications</h3>
            <div className="achieve-grid">
              {achievements.map(a => (
                <div key={a.label} className={`achieve-card card color-${a.color}`}>
                  <span className="achieve-icon">{a.icon}</span>
                  <span className="achieve-label">{a.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
