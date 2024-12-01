export class ScrollEffects {
  constructor() {
    this.observers = [];
    this.init();
  }

  init() {
    const sections = document.querySelectorAll('.section');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: buildThresholdList()
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const section = entry.target;
        
        if (entry.isIntersecting) {
          // Smooth fade in without transform
          section.style.opacity = Math.min(1, entry.intersectionRatio * 1.5);
          section.classList.add('visible');

          // Smooth reveal for children
          const children = section.children;
          Array.from(children).forEach((child, index) => {
            if (!child.classList.contains('visible')) {
              child.style.transitionDelay = `${index * 0.1}s`;
              child.classList.add('visible');
            }
          });
        } else {
          // Keep elements visible once they've been shown
          if (section.classList.contains('visible')) {
            section.style.opacity = 1;
          }
        }
      });
    }, options);

    sections.forEach(section => {
      if (section) {
        // Initial state
        section.style.opacity = '0';
        section.style.transition = 'opacity 0.5s ease';
        observer.observe(section);
      }
    });

    if (observer) {
      this.observers.push(observer);
    }
  }

  dispose() {
    if (this.observers && this.observers.length) {
      this.observers.forEach(observer => {
        if (observer && observer.disconnect) {
          observer.disconnect();
        }
      });
      this.observers = [];
    }
  }
}

function buildThresholdList() {
  const thresholds = [];
  const numSteps = 20;
  
  for (let i = 0; i <= numSteps; i++) {
    thresholds.push(i / numSteps);
  }
  
  return thresholds;
}