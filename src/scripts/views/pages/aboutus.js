const Aboutus = {
  async render() {
    return `
    <div class="about_us_page">
      <div class="card_about">  
        <img class="card_about_image" src="https://www.gravatar.com/avatar/f57ab01833402ccd0f7daa934b68a572?s=200">
        <div class="card_about_description">
          <span>Muhammad Rafli Ramadhan</span>
          <p>Frontend Web Developer</p>
        </div>
        <div class="card_about_link">
          <a href="instagram.com/raflidev" target="_blank" >
            <i class="fab fa-instagram width_svg"></i>
          </a>
        </div>
      </div>
    </div>
    `;
  },
};

export default Aboutus;
