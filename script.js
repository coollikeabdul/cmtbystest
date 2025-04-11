// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Logo cycling animation
  const logo = document.getElementById('logo-img');
  const images = [
    './fwdlogos/Artboard 27.png',
    './fwdlogos/Artboard 36.png',
    './fwdlogos/Artboard 32.png',
    './fwdlogos/Artboard 37.png'
  ];
  let index = 0;
  setInterval(() => {
    index = (index + 1) % images.length;
    logo.src = images[index];
  }, 800);
  
  // Handle modals
  const cards = document.querySelectorAll('.project-card');
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.close');
  
  cards.forEach((card, index) => {
    card.addEventListener('click', () => {
      const modal = modals[index];
      if (modal) modal.classList.add('active');
    });
  });
  
  closeButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const modal = modals[index];
      if (modal) modal.classList.remove('active');
    });
  });
  
  window.addEventListener('click', (event) => {
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.classList.remove('active');
      }
    });
  });
  
  document.getElementById('backToTop')?.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
  }
  document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('#menu a');
    const menu = document.getElementById('menu');

    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('show');
      });
    });
  });
 
  const form = document.getElementById('contactForm');
  const confirmation = document.getElementById('confirmationMessage');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default to show confirmation first
    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
    }).then(response => {
      if (response.ok) {
        confirmation.style.display = 'block';
        form.reset();
        setTimeout(() => {
          confirmation.style.display = 'none';
        }, 5000);
      } else {
        alert('Something went wrong. Please try again later.');
      }
    });
  });

