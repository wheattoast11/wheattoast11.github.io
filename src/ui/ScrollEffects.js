export class ScrollEffects {
  constructor() {
    this.observers = [];
    this.init();
    this.setupParallax();
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
        if (entry.isIntersecting) {
          const ratio = entry.intersectionRatio;
          entry.target.style.opacity = Math.min(ratio * 1.5, 1);
          entry.target.style.transform = `translateY(${(1 - ratio) * 20}px)`;
          
          // Animate children with stagger
          const children = entry.target.children;
          Array.from(children).forEach((child, index) => {
            child.style.transitionDelay = `${index * 100}ms`;
            child.classList.add('visible');
          });
        }
      });
    }, options);

    sections.forEach(section => {
      if (section) {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
      }
    });

    if (observer) {
      this.observers.push(observer);
    }
  }

  setupParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach(element => {
        if (element) {
          const speed = element.dataset.parallax || 0.5;
          const offset = scrolled * speed;
          element.style.transform = `translateY(${offset}px)`;
        }
      });
    };

    // Store the handler reference for cleanup
    this.handleScroll = handleScroll;
    window.addEventListener('scroll', handleScroll);
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

    if (this.handleScroll) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
}

function buildThresholdList() {
  let thresholds = [];
  let numSteps = 20;

  for (let i = 1; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }

  return thresholds;
}