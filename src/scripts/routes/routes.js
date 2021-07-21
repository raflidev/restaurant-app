import Home from '../views/pages/home';
import Favourite from '../views/pages/favourite';
import Detail from '../views/pages/detail';
import Search from '../views/pages/search';

const routes = {
  '/': Home,
  '/detail/:id': Detail,
  '/favourite': Favourite,
  '/search': Search,
  '/search/:id': Search,
};

export default routes;
