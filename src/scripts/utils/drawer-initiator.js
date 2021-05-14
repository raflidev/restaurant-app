const DrawerInitiator = {
  init({ button, drawer }) {
    button.addEventListener('click', () => {
      this._toggleMenu(drawer);
    });
  },

  _toggleMenu(drawer) {
    drawer.classList.toggle('mobile-menu');
  },

};

export default DrawerInitiator;
