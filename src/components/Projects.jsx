import './Projects.css'

const projects = [
  {
    emoji: '🧠',
    title: 'AI-Based Personalized Health Assistant',
    subtitle: 'Tamil Traditional Health Practices',
    desc: 'Multi-agent AI system analyzing symptoms, classifying severity, and retrieving verified Siddha/Ayurvedic remedies using RAG pipeline with safety detection for critical health conditions.',
    tags: ['LangGraph', 'RAG', 'FastAPI', 'FAISS'],
    highlights: [
      'Multi-agent orchestration for symptom analysis',
      'RAG pipeline for verified medical remedies',
      'Safety detection for critical conditions',
      'Response time under 3 seconds via parallel agents',
    ],
    github: 'https://github.com/Gayathrirajendrann/AI-Based-Personalized-Health-Assistant-for-Tamil-Traditional-Health-Practices',
    color: 'purple',
  },
  {
    emoji: '⚖️',
    title: 'NyayaNet',
    subtitle: 'Legal Intelligence System',
    desc: 'Multi-agent workflow handling multilingual legal queries with a Truth-Sentry agent that validates responses against legal database, reducing hallucination via structured validation pipeline.',
    tags: ['CrewAI', 'MySQL', 'NLP', 'ETL'],
    highlights: [
      'Multilingual legal query handling',
      'Truth-Sentry agent for hallucination reduction',
      'Structured ETL for raw legal text',
      'Validated against structured legal database',
    ],
    github: 'https://github.com/Gayathrirajendrann/NyayaNet-Multi-Agent-Code-Mixed-Legal-Intelligence-Swarm',
    color: 'cyan',
  },
  {
    emoji: '🤖',
    title: 'Intelligent Enterprise NLP Chatbot',
    subtitle: 'HR & IT Query Assistant',
    desc: 'Enterprise-grade HR/IT chatbot with neural network-based intent classification, secure 2FA authentication, and REST APIs for real-time query handling.',
    tags: ['PyTorch', 'NLP', 'FastAPI', '2FA'],
    highlights: [
      'Neural network intent classification',
      'Secure 2FA authentication',
      'REST APIs for enterprise queries',
      'Response time under 5 seconds',
    ],
    github: 'https://github.com/Karthika7204/SIH_PROJECT-Chatbot_for_Organizatio_using_NLP',
    color: 'pink',
  },
  {
    emoji: '📰',
    title: 'News Articles Q&A System',
    subtitle: 'RAG-Based News Intelligence',
    desc: 'RAG-based news question-answering system using real-time APIs, NLP preprocessing, embedding retrieval pipeline, and interactive Streamlit interface.',
    tags: ['RAG', 'NLP', 'Streamlit', 'Embeddings'],
    highlights: [
      'Real-time news API integration',
      'NLP preprocessing pipeline',
      'Embedding-based retrieval',
      'Interactive Streamlit app',
    ],
    github: 'https://github.com/Gayathrirajendrann/News-Articles-Based-Answering-for-Subjective-Questions',
    color: 'purple',
  },
  {
    emoji: '🛒',
    title: 'E-Commerce Web Scraper',
    subtitle: 'Multi-Platform Data ETL',
    desc: 'Robust ETL pipeline scraping data from 10+ eCommerce platforms using Selenium, Playwright, and proxy handling for AI/ML analytics.',
    tags: ['Selenium', 'Playwright', 'BeautifulSoup', 'ETL'],
    highlights: [
      '10+ eCommerce platform coverage',
      'Proxy handling for robust extraction',
      'Structured data for AI/ML pipelines',
      'Automated ETL workflow',
    ],
    github: 'https://github.com/Gayathrirajendrann/Ecommerce-Website-Scrapping',
    color: 'cyan',
  },
]

const colorMap = {
  purple: { tag: '', border: 'rgba(124,58,237,0.4)', glow: 'rgba(124,58,237,0.2)' },
  cyan: { tag: 'cyan', border: 'rgba(6,182,212,0.4)', glow: 'rgba(6,182,212,0.15)' },
  pink: { tag: 'pink', border: 'rgba(244,114,182,0.4)', glow: 'rgba(244,114,182,0.15)' },
}

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="projects-orb orb" />
      <div className="container">
        <p className="section-eyebrow">// What I've built</p>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-sub">Real-world AI systems built with modern tooling and production-ready practices.</p>

        <div className="projects-grid">
          {projects.map((p, i) => {
            const c = colorMap[p.color]
            return (
              <div key={p.title} className={`project-card card ${i === 0 ? 'featured' : ''}`}
                style={{ '--hover-border': c.border, '--hover-glow': c.glow }}>
                <div className="project-top">
                  <span className="project-emoji">{p.emoji}</span>
                  <a href={p.github} target="_blank" rel="noreferrer" className="project-gh-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                    View Code
                  </a>
                </div>

                <div className="project-title-wrap">
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-subtitle">{p.subtitle}</p>
                </div>

                <p className="project-desc">{p.desc}</p>

                <ul className="project-highlights">
                  {p.highlights.map(h => (
                    <li key={h}><span className="hi-dot" />  {h}</li>
                  ))}
                </ul>

                <div className="project-tags">
                  {p.tags.map(t => <span key={t} className={`tag ${c.tag}`}>{t}</span>)}
                </div>
              </div>
            )
          })}
        </div>

        <div className="projects-footer">
          <a href="https://github.com/Gayathrirajendrann" target="_blank" rel="noreferrer" className="btn btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            See All Repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
