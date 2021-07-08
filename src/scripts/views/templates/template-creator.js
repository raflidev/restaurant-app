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
  <div id="fav_resto" class="card" tabindex="${tab + index}">
    <img class="lazyload" data-src="${config.imageEndpoint}/${resto.pictureId}" alt="${resto.name}">
    <div class="card-content">
      <h4>
        <a id="resto_title" href="/#/detail/${resto.id}">${resto.name}</a>
      </h4>
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

const createCategoriesDetailRestaurant = (name) => `
  <div class="categories-menu">
    ${name}
  </div>
`;

const createFoodSectionDetailRestaurant = (name) => `
  <div class="foodsection-menu">
    ${name}
  </div>
`;

const createDetailRestaurant = (resto) => `
  <div class="detail-content">
    <div class="detail-page">
      <div class="image">
        <img class="lazyload" tabindex="7" data-src="${config.imageEndpoint}/${resto.pictureId}" alt="${resto.name}">
      </div>
      <div class="resto-detail">
        <h2 tabindex="8">${resto.name}</h2>
        <span>${resto.rating} ${createRatingRestaurant(resto.rating)} </span>
        <p><i class="fa fa-map-marker-alt"></i>  ${resto.address} - ${resto.city}</p>  
        <p tabindex="9">${resto.description}</p>


        <div class="category">
          <span>Kategori : </span>
          <div class="menu-resto" tabindex="10">
            
          </div>
        </div>
      </div>
    </div>
    <div class="menu-page">
      <h3>Daftar Makanan</h3>
      <div class="food-section" tabindex="11">
      </div>

      <h3>Daftar Minuman</h3>
      <div class="drink-section" tabindex="12">
      </div>
    </div>

    <div class="review-page" tabindex="13">
      <h3>Apa kata mereka?</h3>
      <div class="wrapper-customer-review"></div>
    </div>
    
    <div class="post-review">
      <h3 tabindex="14">Ingin memberikan feedback kepada restoran ini?</h3>
      <form id="form-review">
        <div>
          <label>Name</label>
          <input tabindex="15" type="text" id="review-name" name="name" placeholder="Nama" />
        </div>
        <div>
          <label>Review</label>
          <textarea tabindex="16" name="review" id="review-text" row=3 col=2 placeholder="Review"></textarea>
        </div>
        <button tabindex="17" id="review-submit" type="submit">Kirim Feedback</button>
      </form>
    </div>
  </div>
`;

const createCustomerDetailRestaurant = (customer) => `
  <div class="customer-review">
    ${customer.name}
    <div>${customer.review}</div>
    ${customer.date}
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

const createSkeletonMovieTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
      <div class="card">
      <img class="movie-item__header__poster" width="431px" height="350px" src="./images/placeholder.png" alt="skeleton">
      <div class="card-content">
        <h3>Lorem ipsum dolor sit.</a></h3>
        <div class="rating-kota">
        <span>0 ${createRatingRestaurant(0)} </span>
        <span>
        <i class="fa fa-map-marker-alt"></i>
        Bekasi</span>
      </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda</p>
        </div>
      </div>
  `;
  }
  return template;
};

export {
  createListRestaurant,
  createRatingRestaurant,
  createDetailRestaurant,
  createCategoriesDetailRestaurant,
  createFoodSectionDetailRestaurant,
  createCustomerDetailRestaurant,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createSkeletonMovieTemplate,
};
