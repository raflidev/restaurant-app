import restoApi from '../../data/restoApi';
import UrlParser from '../../routes/url-parser';
import {
  createDetailRestaurant,
  createCategoriesDetailRestaurant,
  createFoodSectionDetailRestaurant,
  createCustomerDetailRestaurant,
} from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div class="resto"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await restoApi.restoApiDetail(url.id);
    const wrapper = document.querySelector('.resto');
    wrapper.innerHTML = createDetailRestaurant(detail);

    const categories = document.querySelector('.menu-resto');
    detail.categories.forEach((data) => {
      categories.innerHTML += createCategoriesDetailRestaurant(data.name);
    });

    const foodsection = document.querySelector('.food-section');
    detail.menus.foods.forEach((data) => {
      foodsection.innerHTML += createFoodSectionDetailRestaurant(data.name);
    });

    const drinksection = document.querySelector('.drink-section');
    detail.menus.drinks.forEach((data) => {
      drinksection.innerHTML += createFoodSectionDetailRestaurant(data.name);
    });

    const customer = document.querySelector('.wrapper-customer-review');
    detail.customerReviews.forEach((data) => {
      customer.innerHTML += createCustomerDetailRestaurant(data);
    });
  },
};

export default Detail;
