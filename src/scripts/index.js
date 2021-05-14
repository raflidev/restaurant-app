import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';

import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/fontawesome';

document.querySelector('.burger-menu').addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('mobile-menu');
});

console.log('Hello Coders!');
