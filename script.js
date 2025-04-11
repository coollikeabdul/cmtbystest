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


const logo = document.getElementById('logo-img');

const images = [
  'https://res.cloudinary.com/dpv3s9krm/image/upload/v1744378313/Artboard_27_ictoct.png',
  'https://res.cloudinary.com/dpv3s9krm/image/upload/v1744378315/Artboard_36_jcxctn.png',
  'https://res.cloudinary.com/dpv3s9krm/image/upload/v1744378314/Artboard_32_vlo4ra.png',
  'https://res.cloudinary.com/dpv3s9krm/image/upload/v1744378315/Artboard_37_saqd9k.png'
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
  e.preventDefault(); //

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
      }, 500000);

      
      window.open("https://formsubmit.co/thanks", "_blank");
    } else {
      alert('Something went wrong. Please try again later.');
    }
  });
});


const mainLogo = document.getElementById('logo-img');
const logoAudio = document.getElementById('logo-audio');

mainLogo?.addEventListener('click', () => {
  logoAudio.volume = 0.7;
  logoAudio.currentTime = 0;
  logoAudio.play().catch(e => console.log("Logo playback error:", e));
});
