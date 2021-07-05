import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavouriteResto from '../../src/scripts/data/favourite-resto';

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favouriteResto: FavouriteResto,
    resto,
  });
};

export { createLikeButtonPresenterWithResto };
