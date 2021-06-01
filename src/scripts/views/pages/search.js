import restoApi from '../../data/restoApi';
import { createListRestaurant } from '../templates/template-creator';

const Search = {
  async render() {
    return `
    <div class="search">
      <h3 class="judul">Cari Restoranmu</h3>
      <form>
        <input id="cariResto" type="text" placeholder="Warung Steak ..">
        <button id="buttonCari">Submit</button>
      </form>
      <div class="container">
      </div>
    </div>`;
  },

  async afterRender() {
    const buttonResto = document.querySelector('#buttonCari');
    buttonResto.addEventListener('click', async (e) => {
      e.preventDefault();
      const cariResto = document.querySelector('#cariResto').value;
      const search = await restoApi.restoApiSearch(cariResto);
      const container = document.querySelector('.container');
      container.innerHTML = '';
      console.log(search.length);
      if (search.length > 0) {
        search.forEach((data) => {
          container.innerHTML += createListRestaurant(data);
        });
      } else {
        container.innerHTML = `restaurant ${cariResto} tidak ditemukan`;
      }
    });
  },
};

export default Search;
