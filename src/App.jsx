import React, { Suspense, lazy, useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { m, AnimatePresence } from 'framer-motion';
import LoadingState from './components/LoadingState';
import ErrorBoundary from './components/ErrorBoundary';
import Navigation from './components/Navigation';
import CardInteraction from './components/CardInteraction';
import LayeredBackground from './components/LayeredBackground';
import MouseInteraction from './components/MouseInteraction';
import { ScrollEffects } from '../src/ui/ScrollEffects';

const Home = lazy(() => import('./pages/Home'));

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'manifesto', label: 'Manifesto' },
  { id: 'ecosystem', label: 'Ecosystem' }
];

const ecosystemItems = {
  platforms: {
    title: 'Platforms',
    links: [
      { label: 'Terminals', href: '/platforms/terminals' },
      { label: 'Radical', href: '/platforms/radical' },
      { label: 'PathFinder', href: '/platforms/pathfinder' },
      { label: 'Wuji', href: '/platforms/wuji' }
    ]
  },
  hardware: {
    title: 'Hardware',
    links: [
      { label: 'Neural Interfaces', href: '/hardware/neural' },
      { label: 'Haptics', href: '/hardware/haptics' },
      { label: 'Sensors', href: '/hardware/sensors' }
    ]
  },
  experiences: {
    title: 'Experiences',
    links: [
      { label: 'Virtual Labs', href: '/experiences/labs' },
      { label: 'Training', href: '/experiences/training' },
      { label: 'Research', href: '/experiences/research' }
    ]
  },
  stash: {
    title: 'Stash',
    links: [
      { label: 'Documentation', href: '/stash/docs' },
      { label: 'Resources', href: '/stash/resources' },
      { label: 'Tools', href: '/stash/tools' }
    ]
  }
};

function MainApp() {
  const [currentSection, setCurrentSection] = useState('hero');
  const [openDrawer, setOpenDrawer] = useState(null);
  const scrollEffectsRef = React.useRef(null);

  useEffect(() => {
    // Initialize scroll effects
    scrollEffectsRef.current = new ScrollEffects();
    
    return () => {
      if (scrollEffectsRef.current) {
        scrollEffectsRef.current.dispose();
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= -100 && rect.top <= window.innerHeight / 3) {
          setCurrentSection(section.id);
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    };

    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.addEventListener('scroll', handleScroll, { passive: true });
      return () => mainContent.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleNavigate = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleDrawer = (drawer) => {
    setOpenDrawer(openDrawer === drawer ? null : drawer);
  };

  return (
    <div className="app-container">
      <LayeredBackground />
      <MouseInteraction />
      <Navigation 
        sections={sections} 
        currentSection={currentSection} 
        onNavigate={handleNavigate} 
      />
      
      <main className="main-content">
        <section id="hero" className="section">
          <Home />
        </section>
        
        <section id="services" className="section">
          <div className="section-content">
            <m.h2 
              className="section-title"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Services
              <div className="title-underline" />
            </m.h2>
            <div className="services-grid">
              <CardInteraction>
                <div className="card">
                  <h3>Enterprise AI Strategy</h3>
                  <ul>
                    <li>Comprehensive AI Readiness Assessment</li>
                    <li>Platform Selection & Integration Planning</li>
                    <li>Risk Analysis & Compliance Framework</li>
                    <li>ROI Modeling & Performance Metrics</li>
                    <li>Change Management & Training Programs</li>
                    <li>Scalability & Growth Planning</li>
                  </ul>
                </div>
              </CardInteraction>

              <CardInteraction>
                <div className="card">
                  <h3>LLM Systems</h3>
                  <ul>
                    <li>Custom Model Architecture & Development</li>
                    <li>Advanced Prompt Engineering & Optimization</li>
                    <li>Multi-Modal System Integration</li>
                    <li>Performance Tuning & Scaling</li>
                    <li>Security & Privacy Implementation</li>
                    <li>Continuous Learning & Adaptation</li>
                  </ul>
                </div>
              </CardInteraction>
            </div>
          </div>
        </section>

        <section id="manifesto" className="section">
          <div className="section-content">
            <m.h2 
              className="section-title"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Manifesto
              <div className="title-underline" />
            </m.h2>

            <m.div 
              className="vision-statement"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>Vision</h3>
              <p>We believe in creating AI systems that are ethical, transparent, and focused on enhancing human capabilities. Our approach combines cutting-edge technology with deep industry knowledge to deliver solutions that drive meaningful transformation.</p>
            </m.div>

            <div className="manifesto-grid">
              <CardInteraction>
                <div className="card">
                  <h3>Purpose</h3>
                  <p>Building AI that serves humanity's highest potential</p>
                </div>
              </CardInteraction>

              <CardInteraction>
                <div className="card">
                  <h3>Innovation</h3>
                  <p>Pushing boundaries while maintaining ethical standards</p>
                </div>
              </CardInteraction>

              <CardInteraction>
                <div className="card">
                  <h3>Collaboration</h3>
                  <p>Working together to create meaningful solutions</p>
                </div>
              </CardInteraction>
            </div>
          </div>
        </section>

        <section id="ecosystem" className="section ecosystem-section">
          <div className="section-content">
            <m.h2 
              className="section-title"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Ecosystem
              <div className="title-underline" />
            </m.h2>

            <div className="ecosystem-grid">
              {Object.entries(ecosystemItems).map(([key, item]) => (
                <m.div
                  key={key}
                  className={`ecosystem-drawer ${openDrawer === key ? 'open' : ''}`}
                  onClick={() => toggleDrawer(key)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="drawer-header">
                    <h3>{item.title}</h3>
                    <m.span
                      animate={{ rotate: openDrawer === key ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      ↓
                    </m.span>
                  </div>
                  <div className="drawer-content">
                    <ul className="drawer-links">
                      {item.links.map((link, index) => (
                        <li key={index}>
                          <a href={link.href}>
                            <span>→</span>
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingState />}>
        <MainApp />
      </Suspense>
    ),
    errorElement: <ErrorBoundary />
  }
]);

function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;