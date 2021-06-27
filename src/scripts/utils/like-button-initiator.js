import FavoriteRestaurantIdb from '../data/restaurant-indexdb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this.likeButtonContainer = likeButtonContainer;
    this.movie = restaurant;

    await this.renderButton();
  },

  async renderButton() {
    const { id } = this.movie;

    if (await this.isMovieExist(id)) {
      this.renderLiked();
    } else {
      this.renderLike();
    }
  },

  async isMovieExist(id) {
    const movie = await FavoriteRestaurantIdb.getRestaurant(id);
    return movie;
  },

  renderLike() {
    this.likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this.movie);
      this.renderButton();
    });
  },

  renderLiked() {
    this.likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this.movie.id);
      this.renderButton();
    });
  },
};

export default LikeButtonInitiator;
