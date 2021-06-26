import RestaurantDbSource from '../../data/restaurant-api.dicoding';
import { createListRestaurantTemplate } from '../templates/template-creator';

const search = {
  async render() {
    return `
    <div class="daftar-restoran">
        <h3 class="daftar-restoran-label">Daftar Restoran</h3>
        <div class="container-search one-column-grid">
            <input class="user-review" type="text" id="search" name="enter to search" placeholder="Search..."/>
            <button type="button" class="btn" id="btn-search">Search</button>
        </div>
        <div class="content-loading">
            <div class="container" id="data-restoran">


            </div>
        </div>
    </div>
      `;
  },

  async afterRender() {
    const seacrhElement = document.querySelector('#search');

    const seacrhButton = document.querySelector('#btn-search');
    seacrhButton.addEventListener('click', async () => {
      const restaurantDb = await RestaurantDbSource.listRestaurant(seacrhElement.value);

      const restaurantContainer = document.querySelector('#data-restoran');
      restaurantContainer.innerHTML = '';

      if (restaurantDb.restaurants.length === 0) {
        restaurantContainer.innerHTML = 'Data Not found';
      }

      restaurantDb.restaurants.forEach((movie) => {
        restaurantContainer.innerHTML += createListRestaurantTemplate(movie);
      });
    });
  },
};

export default search;
