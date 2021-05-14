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
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
