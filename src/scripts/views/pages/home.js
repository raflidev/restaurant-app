import restoApi from '../../data/restoApi';
import { createListRestaurant } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="hero-element">
    <h1 class="judul">Tempat makannya anak gaul</h1>
    <p class="deskripsi">Nyaman, Enak, Instagramable adalah andalan kami</p>
    </div>
      <h3 class="judul" tabindex="6">Explore Restoran</h3>
      <div id="wrapper" class="wrapper-image">
      </div>
    </div>
    `;
  },

  async afterRender() {
    const list = await restoApi.restoApiList();
    let tab = 7;
    const wrapper = document.querySelector('#wrapper');
    list.forEach((data, index) => {
      wrapper.innerHTML += createListRestaurant(data, index, tab);
      tab += 1;
    });
  },
};

export default Home;
