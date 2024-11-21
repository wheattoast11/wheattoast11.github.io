import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div id="app">
      <canvas id="bg"></canvas>
      <header>
        <h1>Intuition Labs</h1>
        <p className="tagline">Pioneering the future of AI through research and strategic innovation</p>
      </header>

      <div className="platforms-marquee">
        <div className="platforms-track">
          <span className="platform-name platform-terminals">terminals</span>
          <span className="platform-name platform-radical">radical</span>
          <span className="platform-name platform-pathfinder">pathfinder</span>
          <span className="platform-name platform-wuji">wuji</span>
          <span className="platform-name platform-boom">boom</span>
          <span className="platform-name platform-journey">journey</span>
          <span className="platform-name platform-terminals">terminals</span>
          <span className="platform-name platform-radical">radical</span>
          <span className="platform-name platform-pathfinder">pathfinder</span>
          <span className="platform-name platform-wuji">wuji</span>
          <span className="platform-name platform-boom">boom</span>
          <span className="platform-name platform-journey">journey</span>
        </div>
      </div>

      <section className="section">
        <h2>Our Vision</h2>
        <p>Transforming enterprises through cutting-edge AI solutions and polymathic expertise</p>
        <div className="cta-container">
          <a href="https://zcal.co/terminals" className="cta-button">Schedule Consultation</a>
          <Link to="/manifesto" className="text-link">Read Our Manifesto</Link>
        </div>
      </section>

      <section className="section apps-grid">
        <h2>Featured Solutions</h2>
        <div className="grid">
          <div className="card">
            <h3>Enterprise AI Strategy</h3>
            <p>Comprehensive AI implementation and transformation roadmaps</p>
            <a href="#strategy" className="learn-more">Learn More →</a>
            <div className="learn-more-content">
              <ul>
                <li>Enterprise AI Implementation Strategy</li>
                <li>LLM & Agent System Architecture</li>
                <li>GTM Strategy Development</li>
                <li>Complex System Integration</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <h3>LLM Systems</h3>
            <p>Custom language model development and integration</p>
            <a href="#llm" className="learn-more">Learn More →</a>
            <div className="learn-more-content">
              <ul>
                <li>Custom AI Agent Development</li>
                <li>Advanced Prompt Engineering</li>
                <li>Multi-modal System Design</li>
                <li>Process Automation & Optimization</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <h3>AI Agents</h3>
            <p>Autonomous agent systems for process automation</p>
            <a href="#agents" className="learn-more">Learn More →</a>
            <div className="learn-more-content">
              <ul>
                <li>30k+ hours annual productivity improvement</li>
                <li>Enterprise systems architecture across industries</li>
                <li>Performance management for mega-cap enterprises</li>
                <li>Cloud-wide tech stack transformation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="social-links">
          <a href="https://www.linkedin.com/company/intuition-labs">LinkedIn</a>
          <a href="https://github.com/wheattoast11">GitHub</a>
          <a href="https://www.youtube.com/@IntuitionLabsLLC">YouTube</a>
        </div>
        <p className="copyright">© 2024 Intuition Labs LLC. Pioneering the future of AI.</p>
      </footer>
    </div>
  );
}

export default Home;