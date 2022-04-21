// Burger start------------------------------------
const burger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const navLink = document.querySelectorAll('.nav-link');

function toggleMenu() {
  burger.classList.toggle('open');
  nav.classList.toggle('open');
  overlay.classList.toggle('open');
  body.classList.toggle('open');
}  
burger.addEventListener('click', toggleMenu);

function closeMenu() {
  burger.classList.remove('open');
  nav.classList.remove('open');
  overlay.classList.remove('open');
  body.classList.remove('open');
}
overlay.addEventListener('click', closeMenu);

navLink.forEach(el => el.addEventListener('click', closeMenu));

// Burger end-----------------------------------------