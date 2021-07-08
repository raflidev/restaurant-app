import favouriteResto from '../../data/favourite-resto';
import { createListRestaurant } from '../templates/template-creator';

const Favourite = {
  async render() {
    return `
    <h1 style='padding:20px;margin:0;text-align:center'>
      Favourite Restaurantmu
    </h1>
    <div id="query" class="container">
    </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const resto = await favouriteResto.getAllResto();
    const container = document.querySelector('.container');
    if (resto.length === 0) {
      container.innerHTML = '<p id="favourite_empty" style="text-align:center;font-style:italic;">anda belum punya restaurant favorit.</p>';
    }
    resto.forEach((data) => {
      container.innerHTML += createListRestaurant(data);
    });
  },
};

export default Favourite;
