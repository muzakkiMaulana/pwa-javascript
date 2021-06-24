import RestaurantDbSource from '../data/restaurant-api.dicoding';
import UrlParser from '../routes/url-parser';
import { restaurantReviewTemplate } from '../views/templates/template-detail';

const AddReview = {
  init({ ElementButtonSubmit, nameReview, descriptionReview }) {
    ElementButtonSubmit.addEventListener('click', (e) => {
      e.stopPropagation();
      this.sendReview(nameReview, descriptionReview);
    });
  },
  async sendReview(nameReview, descriptionReview) {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailElement = document.querySelector('detail-content');

    const restaurantDb = await RestaurantDbSource.addReview(
      url.id,
      nameReview.value,
      descriptionReview.value,
    );
    detailElement.addReviewContentToView = {
      review: restaurantReviewTemplate(restaurantDb.customerReviews),
    };
  },
};

export default AddReview;
