import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';

import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/fontawesome';

import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.burger-menu'),
  drawer: document.querySelector('.menu'),
  content: document.querySelector('.main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

console.log('Hello Coders!');
