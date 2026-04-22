import { Github, Linkedin, Mail, ExternalLink, Code2, Rocket, Palette } from 'lucide-react'

function App() {
  return (
    <div className="container">
      <nav className="nav">
        <div className="logo">Raj.dev</div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="badge">Available for opportunities</div>
          <h1>Crafting digital experiences with precision & purpose.</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '600px' }}>
            Senior Full-stack Developer specializing in React, Node.js, and Cloud Architecture. 
            Turning complex problems into elegant, production-ready solutions.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <a href="https://github.com" target="_blank" rel="noreferrer"><Github size={24} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={24} /></a>
            <a href="mailto:hello@example.com"><Mail size={24} /></a>
          </div>
        </section>

        <section id="projects" style={{ marginTop: '8rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Featured Work</h2>
          <div className="grid">
            <ProjectCard 
              title="Modern SaaS Platform" 
              desc="A high-performance dashboard for data analytics and real-time monitoring."
              icon={<Rocket className="text-accent" />}
            />
            <ProjectCard 
              title="Creative Studio" 
              desc="Minimalist portfolio for a design agency with smooth micro-interactions."
              icon={<Palette className="text-accent" />}
            />
            <ProjectCard 
              title="API Gateway" 
              desc="Scalable infrastructure project handling millions of requests daily."
              icon={<Code2 className="text-accent" />}
            />
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Raj. Built with Vite & React. Deployed on Render.</p>
      </footer>
    </div>
  )
}

function ProjectCard({ title, desc, icon }) {
  return (
    <div className="card">
      <div style={{ marginBottom: '1.5rem', color: 'var(--accent)' }}>
        {icon}
      </div>
      <h3 style={{ marginBottom: '0.75rem' }}>{title}</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>{desc}</p>
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
        View Project <ExternalLink size={14} />
      </a>
    </div>
  )
}

export default App
