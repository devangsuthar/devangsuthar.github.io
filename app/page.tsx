export default function Home() {
  return (
    <div className="bg-black dark:bg-gray-900 dark:text-white min-h-screen flex flex-col items-center justify-center">
       <main>
      {/* Navbar */}
      <nav className="navbar">
        <h2>Devang</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div>
          <p className="hello">Hello, I'm</p>

          <h1>Devang</h1>

          <h2>Full Stack Developer</h2>

          <p>
            I build modern, fast and user-friendly websites and web
            applications using modern technologies.
          </p>

          <div className="buttons">
            <a href="#projects" className="btn">
              View My Work
            </a>

            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          I'm a passionate developer who enjoys creating clean,
          responsive and high-performance websites. I love turning
          ideas into useful digital products.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills">
          <span>Next.js</span>
          <span>React</span>
          <span>JavaScript</span>
          <span>WordPress</span>
          <span>PHP</span>
          <span>MySQL</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>AWS</span>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>My Projects</h2>

        <div className="projects">
          <div className="project-card">
            <h3>Project One</h3>
            <p>
              A modern web application built with Next.js and React.
            </p>
            <a href="#">View Project →</a>
          </div>

          <div className="project-card">
            <h3>Project Two</h3>
            <p>
              A responsive business website with a clean and modern UI.
            </p>
            <a href="#">View Project →</a>
          </div>

          <div className="project-card">
            <h3>Project Three</h3>
            <p>
              A custom WordPress project with optimized performance.
            </p>
            <a href="#">View Project →</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <h2>Let's Work Together</h2>

        <p>
          Have a project in mind? Feel free to get in touch.
        </p>

        <a href="mailto:your@email.com" className="btn">
          Email Me
        </a>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Devang. All rights reserved.</p>
      </footer>
    </main>
    </div>
  );
}
