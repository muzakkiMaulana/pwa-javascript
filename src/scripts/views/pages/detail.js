import RestaurantDbSource from '../../data/restaurant-api.dicoding';
import UrlParser from '../../routes/url-parser';
// import { createRestaurantDetailTemplate } from '../templates/template-creator';
import { restaurantCategoriesTemplate, restaurantMenusTemplate, restaurantReviewTemplate } from '../templates/template-detail';
import '../component/detail-content';
import AddReview from '../../utils/add-review';

const detail = {
  async render() {
    return `
        <div class="detail-restoran">
          <detail-content></detail-content>
        </div>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDb = await RestaurantDbSource.detailRestaurant(url.id);
    const detailElement = document.querySelector('detail-content');

    let elementCategories = '';
    const arrColor = ['#51C4D3', '#126E82'];

    restaurantDb.restaurant.categories.forEach((element, index) => {
      const colorForCategories = (index + 1) % 2;
      elementCategories += restaurantCategoriesTemplate(element.name, arrColor[colorForCategories]);
    });

    detailElement.addDataToDetailContent = {
      restaurant: restaurantDb.restaurant,
      categories: elementCategories,
      foods: restaurantMenusTemplate(restaurantDb.restaurant.menus.foods),
      drinks: restaurantMenusTemplate(restaurantDb.restaurant.menus.drinks),
      review: restaurantReviewTemplate(restaurantDb.restaurant.customerReviews),
      functionAddReview: AddReview,
    };
  },
};

export default detail;
