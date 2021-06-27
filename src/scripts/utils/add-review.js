import RestaurantDbSource from '../data/restaurant-api.dicoding';
import UrlParser from '../routes/url-parser';
import { restaurantReviewTemplate } from '../views/templates/template-detail';

const AddReview = {
  init({
    ElementButtonSubmit, nameReview, descriptionReview, elementLoading, elementReview,
  }) {
    ElementButtonSubmit.addEventListener('click', (e) => {
      e.stopPropagation();
      this.sendReview({
        nameReview, descriptionReview, elementLoading, elementReview,
      });
    });
  },

  async sendReview({
    nameReview, descriptionReview, elementLoading, elementReview,
  }) {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailElement = document.querySelector('detail-content');

    const restaurantDb = await RestaurantDbSource.addReview({
      review: {
        id: url.id,
        nameReview: nameReview.value,
        descriptionReview: descriptionReview.value,
      },
      elementLoading: {
        loading: elementLoading,
        ElementContent: elementReview,
      },
    });

    detailElement.addReviewContentToView = {
      review: restaurantReviewTemplate(restaurantDb.customerReviews),
    };
  },
};

export default AddReview;
