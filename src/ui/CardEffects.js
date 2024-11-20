export class CardEffects {
  constructor() {
    this.init();
  }

  init() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
      // Mouse move effect for gradient
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--x', `${x}%`);
        card.style.setProperty('--y', `${y}%`);
      });

      // Stagger animation for list items on hover
      const listItems = card.querySelectorAll('.learn-more-content li');
      listItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 50}ms`;
      });
    });
  }
}