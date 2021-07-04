import FavouriteResto from '../src/scripts/data/favourite-resto';
import * as TestFactories from './helpers/testFactories';

describe('Liking a restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="like this resto"]')).toBeTruthy();
  });

  it('should not show the unlike button when the movie has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this resto"]'))
      .toBeFalsy();
  });

  it('should be able to like the movie', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const resto = await FavouriteResto.getResto(1);

    expect(resto).toEqual({ id: 1 });

    FavouriteResto.deleteResto(1);
  });

  it('should not add a movie again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavouriteResto.putResto({ id: 1 });
    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    // tidak ada film yang ganda
    expect(await FavouriteResto.getAllResto()).toEqual([{ id: 1 }]);

    FavouriteResto.deleteResto(1);
  });

  it('should not add a movie when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavouriteResto.getAllResto()).toEqual([]);
  });
});
