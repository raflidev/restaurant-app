import Home from '../views/pages/home';
import Aboutus from '../views/pages/aboutus';
import Favourite from '../views/pages/favourite';
import Detail from '../views/pages/detail';
import Search from '../views/pages/search';

const routes = {
  '/': Home,
  '/about-us': Aboutus,
  '/detail/:id': Detail,
  '/favourite': Favourite,
  '/search/:id': Search,
};

export default routes;
