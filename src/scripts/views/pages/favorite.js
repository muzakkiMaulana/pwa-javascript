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
    // const movies = await TheMovieDbSource.upcomingMovies();
    // const moviesContainer = document.querySelector('#movies');
    // movies.forEach((movie) => {
    //   moviesContainer.innerHTML += createMovieItemTemplate(movie);
    // });
  },
};

export default favorite;
