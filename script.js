document.addEventListener('DOMContentLoaded', function () {
  const reveals = document.querySelectorAll('.reveal');

  const observerOptions = {
    threshold: 0.2,
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  reveals.forEach((section) => revealObserver.observe(section));

  const buttons = document.querySelectorAll('.button');
  buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-2px) scale(1.01)';
    });
    button.addEventListener('mouseleave', () => {
      button.style.transform = '';
    });
  });
});
