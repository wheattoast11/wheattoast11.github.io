export class CardEffects {
  constructor() {
    this.init();
  }

  init() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
      // Enhanced mouse move effect
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        // Update gradient position
        card.style.setProperty('--x', `${x}%`);
        card.style.setProperty('--y', `${y}%`);
        
        // Add subtle rotation effect
        const rotateX = (y - 50) * 0.1;
        const rotateY = (x - 50) * -0.1;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      });

      // Reset transform on mouse leave
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
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
}