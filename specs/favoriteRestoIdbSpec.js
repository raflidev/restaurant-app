import { itActsAsFavoriteRestoModel } from './contract/favoriteMovieContract';
import FavouriteResto from '../src/scripts/data/favourite-resto';

describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavouriteResto.getAllResto()).forEach(async (resto) => {
      await FavouriteResto.deleteResto(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(FavouriteResto);
});
