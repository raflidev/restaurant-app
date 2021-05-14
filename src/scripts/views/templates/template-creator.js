import config from '../../globals/config';

const createRatingRestaurant = (rating) => {
  let bintang = '';
  if (rating === 5) {
    bintang = '<i class="fa fa-star full"></i> <i class="fa fa-star full"></i> <i class="fa fa-star full"></i> <i class="fa fa-star full"></i> <i class="fa fa-star full"></i>';
  } else if (rating >= 4) {
    bintang = '<i class="fa fa-star full"></i> <i class="fa fa-star full"></i> <i class="fa fa-star full"></i> <i class="fa fa-star full"></i> <i class="fa fa-star"></i>';
  } else if (rating >= 3) {
    bintang = '<i class="fa fa-star full"></i> <i class="fa fa-star full"></i> <i class="fa fa-star full"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>';
  } else if (rating >= 2) {
    bintang = '<i class="fa fa-star full"></i> <i class="fa fa-star full"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>';
  } else if (rating >= 1) {
    bintang = '<i class="fa fa-star full"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>';
  } else if (rating === 0) {
    bintang = '<i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>';
  }
  return bintang;
};

const createListRestaurant = (resto, index, tab) => `
<div>
    <div class="card" tabindex="${tab + index}">
        <img src="${config.imageEndpoint}/${resto.pictureId}" alt="${resto.name}">
        <div class="card-content">
            <h4>${resto.name}</h4>
            <div class="rating-kota">
                <span>${resto.rating} ${createRatingRestaurant(resto.rating)} </span>
                <span>
                <i class="fa fa-map-marker-alt"></i>
                ${resto.city}</span>
            </div>
            <p>${resto.description.substr(0, 107)}...</p>
        </div>
        </div>
        </div>

`;

export { createListRestaurant, createRatingRestaurant };
