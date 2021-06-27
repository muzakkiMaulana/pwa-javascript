import API_ENDPOINT from '../globals/api-endpoint';
import generateLoading from '../utils/generate-loading';

class RestaurantDbSource {
  static async listRestaurant({ element, elementLoading, value }) {
    let data = '';

    // add loading
    generateLoading.addingLoading(element, elementLoading);
    // end add loading

    try {
      const response = await fetch(API_ENDPOINT.LIST_RESTAURANT(value));

      if (response.status === 200) {
        generateLoading.init(element, elementLoading, response.status);
        data = response.json();
      }
    } catch (error) {
      generateLoading.init(element, elementLoading, error);
    }

    return data;
  }

  static async detailRestaurant({ element, elementLoading, id }) {
    let data = '';

    // add loading
    generateLoading.addingLoading(element, elementLoading);
    // end add loading

    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));

      if (response.status === 200) {
        generateLoading.init(element, elementLoading, response.status);
        data = response.json();
      }
    } catch (error) {
      generateLoading.init(element, elementLoading, error);
    }

    return data;
  }

  static async addReview({ review, elementLoading }) {
    let data = '';

    generateLoading.addingLoading(elementLoading.ElementContent, elementLoading.loading);

    const dataReview = {
      id: review.id,
      name: review.nameReview,
      review: review.descriptionReview,
    };

    if (!dataReview.id || !dataReview.name || !dataReview.review) {
      generateLoading.init(elementLoading.ElementContent, elementLoading.loading, 'silakan masukan data');
    }

    try {
      const response = await fetch(API_ENDPOINT.REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': '12345',
        },
        body: JSON.stringify(dataReview),
      });

      if (response.status === 200) {
        generateLoading.init(
          elementLoading.ElementContent, elementLoading.loading, response.status,
        );

        data = response.json();
      }
    } catch (error) {
      generateLoading.init(elementLoading.ElementContent, elementLoading.loading, error);
    }

    return data;
  }
}

export default RestaurantDbSource;
