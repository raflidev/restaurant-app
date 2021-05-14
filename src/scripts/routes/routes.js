import Home from '../views/pages/home';
import Aboutus from '../views/pages/aboutus';
import Favourite from '../views/pages/favourite';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home,
  '/about-us': Aboutus,
  '/detail/:id': Detail,
  '/favourite': Favourite,
};

export default routes;
