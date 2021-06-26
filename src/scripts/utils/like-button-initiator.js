// import FavoriteMovieIdb from '../data/favoritemovie-idb';
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
    // const movie = await FavoriteMovieIdb.getMovie(id);
    return false;
  },

  renderLike() {
    this.likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      // await FavoriteMovieIdb.putMovie(this.movie);
      // this.renderButton();
    });
  },

  renderLiked() {
    this.likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      // await FavoriteMovieIdb.deleteMovie(this.movie.id);
      // this.renderButton();
    });
  },
};

export default LikeButtonInitiator;
