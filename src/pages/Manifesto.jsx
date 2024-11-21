import React from 'react';
import { Link } from 'react-router-dom';

function Manifesto() {
  return (
    <div id="app">
      <canvas id="bg"></canvas>
      <header>
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>Our Manifesto</h1>
        <p className="tagline">Shaping the future of AI with purpose and responsibility</p>
      </header>

      <section className="section manifesto-content">
        <div className="manifesto-grid">
          <div className="manifesto-item">
            <h2>Purpose</h2>
            <p>We believe AI should augment human capabilities, not replace them. Our mission is to create AI systems that enhance human potential while maintaining ethical boundaries and promoting sustainable innovation.</p>
          </div>

          <div className="manifesto-item">
            <h2>Innovation</h2>
            <p>True innovation comes from understanding both the technical and human aspects of AI. We combine cutting-edge technology with deep industry knowledge to create solutions that matter.</p>
          </div>

          <div className="manifesto-item">
            <h2>Ethics</h2>
            <p>We are committed to developing AI systems that are transparent, fair, and accountable. Our ethical framework ensures that every solution we create considers its impact on society and individuals.</p>
          </div>

          <div className="manifesto-item">
            <h2>Collaboration</h2>
            <p>The best solutions emerge from diverse perspectives. We work closely with our clients, fostering partnerships that drive meaningful transformation and sustainable growth.</p>
          </div>
        </div>

        <div className="principles">
          <h2>Our Guiding Principles</h2>
          <ul className="experience-list">
            <li>Human-centered AI development that prioritizes user needs and experiences</li>
            <li>Continuous learning and adaptation to emerging technologies and methodologies</li>
            <li>Transparent communication and collaboration with stakeholders</li>
            <li>Sustainable and responsible AI implementation practices</li>
            <li>Commitment to diversity, equity, and inclusion in AI development</li>
          </ul>
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

export default Manifesto;