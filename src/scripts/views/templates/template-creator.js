import CONFIG from '../../globals/config';

const createListRestaurantTemplate = (restaurant) => `
                  <article class="card list-item">
                    <div class="card-header" tabindex="0">${restaurant.city}</div>
                        <div class="card-img">
                
                              <img data-sizes="auto" data-src="${restaurant.pictureId ? CONFIG.BASE_URL + CONFIG.IMAGE_SMALL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}" class="lazyload">
                      
                          </div>
                        <div class="card-body">
                            <h4 class="title-card"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h4>
                            <p tabindex="0" class="card-description">${restaurant.description}</p>
                        </div>
                        <div tabindex="0" class="card-footer">
                            <p>Rating: ${restaurant.rating}</p>
                        </div>
                    </article>

`;

const createListNotFoundTemplate = () => `
                  <div class="list-notfound">Data Tidak di temukan</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

const createErrorTemplate = (message) => `
  <div class="error-message">
    <i class="fas fa-exclamation"></i>${message}
  </div>
`;

const createSkeletonRestaurantTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
      <div class="movie-item">
        <div class="movie-item__header">
            <img class="movie-item__header__poster" width="100%" height="350px" src="./images/placeholder.png" alt="skeleton">
        </div>
        <div class="movie-item__content">
            <h3 class="skeleton">Lorem ipsum dolor sit.</a></h3>
            <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</p>
        </div>
      </div>
  `;
  }
  return template;
};

export {
  createListRestaurantTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createErrorTemplate,
  createListNotFoundTemplate,
  createSkeletonRestaurantTemplate,
};
