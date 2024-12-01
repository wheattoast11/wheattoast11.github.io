export class CardEffects {
  constructor() {
    this.init();
    this.eventListeners = new Map();
  }

  init() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
      // Enhanced mouse move effect
      const mousemoveHandler = (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        card.style.setProperty('--x', `${x}%`);
        card.style.setProperty('--y', `${y}%`);
        
        const rotateX = (y - 50) * 0.1;
        const rotateY = (x - 50) * -0.1;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      };

      const mouseleaveHandler = () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
      };

      card.addEventListener('mousemove', mousemoveHandler);
      card.addEventListener('mouseleave', mouseleaveHandler);

      // Store event listeners for cleanup
      this.eventListeners.set(card, {
        mousemove: mousemoveHandler,
        mouseleave: mouseleaveHandler
      });

      // Enhanced stagger animation for list items
      const listItems = card.querySelectorAll('.learn-more-content li');
      listItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 75}ms`;
        item.style.transform = 'translateY(10px)';
        item.style.opacity = '0';
      });
    });
  }

  dispose() {
    this.eventListeners.forEach((listeners, card) => {
      card.removeEventListener('mousemove', listeners.mousemove);
      card.removeEventListener('mouseleave', listeners.mouseleave);
    });
    this.eventListeners.clear();
  }
}