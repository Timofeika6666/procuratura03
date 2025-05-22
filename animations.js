// Плавне з'явлення елементів при скролі
document.addEventListener('DOMContentLoaded', () => {
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.priority-item, .feature-card');
    
    elements.forEach(el => {
      const elPosition = el.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if(elPosition < screenPosition) {
        el.style.animation = `fadeInUp 0.5s ${el.getAttribute('style')?.includes('--delay') ? 
                           el.style.getPropertyValue('--delay') : '0s'} forwards`;
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Ініціалізація при завантаженні

  // Ефект хвилі для кнопок
  const buttons = document.querySelectorAll('nav a, .cta-button');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', (e) => {
      const x = e.pageX - btn.getBoundingClientRect().left;
      const y = e.pageY - btn.getBoundingClientRect().top;
      
      const wave = document.createElement('span');
      wave.className = 'wave';
      wave.style.left = `${x}px`;
      wave.style.top = `${y}px`;
      
      btn.appendChild(wave);
      
      setTimeout(() => wave.remove(), 500);
    });
  });
});
// Анімація при скролі
document.querySelectorAll('.feature-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
});

window.addEventListener('scroll', () => {
  document.querySelectorAll('.feature-card').forEach(card => {
    if (card.getBoundingClientRect().top < window.innerHeight - 100) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
      card.style.transition = 'all 0.6s ease-out';
    }
  });
});
