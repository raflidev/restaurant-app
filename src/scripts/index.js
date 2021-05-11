import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/fontawesome';
import data from '../DATA.json';

let list = '';
let bintang = '';
const tab = 7;
data.restaurants.forEach((resto, index) => {
  bintang = '';
  if (resto.rating === 5) {
    bintang = '<i class="fa fa-star full"></i> <i class="fa fa-star full"></i> <i class="fa fa-star full"></i> <i class="fa fa-star full"></i> <i class="fa fa-star full"></i>';
  } else if (resto.rating >= 4) {
    bintang = '<i class="fa fa-star full"></i> <i class="fa fa-star full"></i> <i class="fa fa-star full"></i> <i class="fa fa-star full"></i> <i class="fa fa-star"></i>';
  } else if (resto.rating >= 3) {
    bintang = '<i class="fa fa-star full"></i> <i class="fa fa-star full"></i> <i class="fa fa-star full"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>';
  } else if (resto.rating >= 2) {
    bintang = '<i class="fa fa-star full"></i> <i class="fa fa-star full"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>';
  } else if (resto.rating >= 1) {
    bintang = '<i class="fa fa-star full"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>';
  } else if (resto.rating == 0) {
    bintang = '<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>';
  }
  list += `
    <div>
        <div class="card" tabindex="${tab + index}">
            <img src="${resto.pictureId}" alt="${resto.name}">
            <div class="card-content">
                <h4>${resto.name}</h4>
                <div class="rating-kota">
                    <span>${resto.rating} ${bintang} </span>
                    <span>
                    <i class="fa fa-map-marker-alt"></i>
                    ${resto.city}</span>
                </div>
                <p>${resto.description.substr(0, 107)}...</p>
            </div>
            </div>
    </div>
    `;
});

document.getElementById('wrapper').innerHTML = list;

document.querySelector('.burger-menu').addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('mobile-menu');
});
