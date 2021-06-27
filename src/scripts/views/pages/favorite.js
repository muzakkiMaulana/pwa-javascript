import FavoriteRestaurantIdb from '../../data/restaurant-indexdb';
import { createListRestaurantTemplate } from '../templates/template-creator';

const favorite = {
  async render() {
    return `
      <div class="daftar-restoran">
          <h3 class="daftar-restoran-label">Favorite</h3>
          <div class="container" id="data-restoran">
  
  
          </div>
      </div>
        `;
  },

  async afterRender() {
    const movies = await FavoriteRestaurantIdb.getAllRestaurant();
    const moviesContainer = document.querySelector('#data-restoran');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createListRestaurantTemplate(movie);
    });
  },
};

export default favorite;
