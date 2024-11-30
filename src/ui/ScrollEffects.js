export class ScrollEffects {
  constructor() {
    this.init();
    this.setupParallax();
    this.observers = [];
  }

  init() {
    const options = {
      root: null,
      rootMargin: '20px', 
      threshold: buildThresholdList()
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (entry.target.dataset.parallax) {
            this.setupParallaxForElement(entry.target);
          }
        }
      });
    }, options);

    document.querySelectorAll('.section, [data-parallax]').forEach(el => {
      observer.observe(el);
    });
    this.observers.push(observer);
  }

  setupParallaxForElement(element) {
    const speed = element.dataset.parallax || 0.5;
    
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const offset = scrolled * speed;
      element.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener('scroll', handleScroll);
  }

  dispose() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    window.removeEventListener('scroll', this.handleScroll);
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