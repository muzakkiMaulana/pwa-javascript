import CONFIG from '../../globals/config';

class DetailContent extends HTMLElement {
  set addDataToDetailContent({
    restaurant, categories, foods, drinks, review, functionAddReview,
  }) {
    this.restaurant = restaurant;
    this.categories = categories;
    this.foods = foods;
    this.drinks = drinks;
    this.review = review;
    this.functionAddReview = functionAddReview;

    this.render();

    this.addReview();

    this.reviewContentToView();
  }

  set addReviewContentToView({ review }) {
    this.review = review;
    this.reviewContentToView();
  }

  render() {
    this.innerHTML = `
    <div class="container-detail">
      <div style="" class="display-grid one-column-grid">

        <div class="detail-img">
          <img tabindex="0" src="${this.restaurant.pictureId ? CONFIG.BASE_URL + CONFIG.IMAGE_MEDIUM + this.restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${this.restaurant.name}">
        </div>
        <div class="categories-detail">
          ${this.categories}
        </div>
    
      </div>
      <div class="display-grid one-column-grid grid-auto-content p1">
        <h3 tabindex="0" class="title-detail">${this.restaurant.name}</h3>
          <div class="city-detail text-center text-white">
            <div tabindex="0"><i class="fas fa-city"></i>${this.restaurant.city}</div>
            <div tabindex="0"><i class="fas fa-map-marker-alt"></i>${this.restaurant.address}</div>
            <div tabindex="0"><i class="fas fa-star-half-alt"></i>Rating: ${this.restaurant.rating}</div>
          </div>
        <div tabindex="0" class="description-detail">${this.restaurant.description}</div>
        <div tabindex="0" class="description-detail"></div>
      </div>
    </div>

    <div class="container-detail">
      <div class="display-grid one-column-grid grid-auto-content">
        <h3 tabindex="0" class="title-detail">Foods</h3>
        <div class="display-grid two-column-grid menus-detail">
        ${this.foods}
        </div>
      </div>
      <div class="display-grid one-column-grid grid-auto-content">
        <h3 tabindex="0" class="title-detail">Drinks</h3>
        <div class="display-grid two-column-grid menus-detail">
        ${this.drinks}
        </div>
      </div>
    </div>

    <div class="one-column-grid container-detail">
      <h3 tabindex="0"  class="title-detail">Reviews</h3>
      <div class="display-grid one-column-grid">
        <form class="display-grid one-column-grid form-review" id="add-review">
        <h4 tabindex="0">Add Description</h4>

        <input class="user-review" type="text" id="name-reviewer" name="enter name for review" placeholder="Enter name..."/>
        <input class="user-review" type="text" id="description-reviewer" name="description for review" placeholder="Enter description..."/>
        
        <button type="button" class="btn" id="btn-add-review">Add review</button>
        </form>
      </div>
      <div id="review-content" class="display-grid two-column-grid grid-auto-content text-white">
      </div>
    </div>

          `;
  }

  reviewContentToView() {
    const elementReview = document.querySelector('#review-content');
    elementReview.innerHTML = this.review;
  }

  async addReview() {
    await this.functionAddReview.init({
      ElementButtonSubmit: document.querySelector('#btn-add-review'),
      nameReview: document.querySelector('#name-reviewer'),
      descriptionReview: document.querySelector('#description-reviewer'),
    });
  }
}

customElements.define('detail-content', DetailContent);
