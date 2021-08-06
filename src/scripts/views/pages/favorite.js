import FavoriteRestaurantIdb from '../../data/restaurant-indexdb';
import { createListRestaurantTemplate, createListNotFoundTemplate } from '../templates/template-creator';

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
    if (movies.length) {
      movies.forEach((movie) => {
        moviesContainer.innerHTML += createListRestaurantTemplate(movie);
      });
    } else {
      moviesContainer.innerHTML = createListNotFoundTemplate();
      // console.log('data not found');
    }
  },
};

export default favorite;
