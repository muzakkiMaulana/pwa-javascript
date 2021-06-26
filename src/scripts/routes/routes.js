import listRestaurant from '../views/pages/list-restaurant';
import favorite from '../views/pages/favorite';
import detail from '../views/pages/detail';
import search from '../views/pages/search';

const routes = {
  '/': listRestaurant, // default page
  '/favorite': favorite,
  '/search': search,
  '/detail/:id': detail,
  // '/like': Like,
};

export default routes;
