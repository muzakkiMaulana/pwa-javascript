import CONFIG from '../../globals/config';

const createListRestaurantTemplate = (restaurant) => `
                  <article class="card">
                    <div class="card-header" tabindex="0">${restaurant.city}</div>
                        <div class="card-img">
                            <img tabindex="0" src="${restaurant.pictureId ? CONFIG.BASE_URL + CONFIG.IMAGE_SMALL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}">
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

export {
  createListRestaurantTemplate,
};
