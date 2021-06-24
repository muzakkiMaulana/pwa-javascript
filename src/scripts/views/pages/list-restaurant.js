import RestaurantDbSource from '../../data/restaurant-api.dicoding';
import { createListRestaurantTemplate } from '../templates/template-creator';

const listRestaurant = {
  async render() {
    return `
    <div class="daftar-restoran">
        <h3 class="daftar-restoran-label">Daftar Restoran</h3>
        <div class="container" id="data-restoran">


        </div>
    </div>
      `;
  },

  async afterRender() {
    const restaurantDb = await RestaurantDbSource.listRestaurant();
    const restaurantContainer = document.querySelector('#data-restoran');
    restaurantDb.restaurants.forEach((movie) => {
      restaurantContainer.innerHTML += createListRestaurantTemplate(movie);
    });
  },
};

export default listRestaurant;
