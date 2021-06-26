import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async listRestaurant(value) {
    let data = '';
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT(value));

    if (response.status === 200) {
      data = response.json();
    } else {
      data = response.status;
    }

    return data;
  }

  static async detailRestaurant(id) {
    let data = '';
    const response = await fetch(API_ENDPOINT.DETAIL(id));

    if (response.status === 200) {
      data = response.json();
    } else {
      data = response.status;
    }

    return data;
  }

  static async addReview(idUrl, nameValue, descriptionValue) {
    let data = '';
    const dataReview = {
      id: idUrl,
      name: nameValue,
      review: descriptionValue,
    };
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': '12345',
      },
      body: JSON.stringify(dataReview),
    });

    if (response.status === 200) {
      data = response.json();
    } else {
      data = response.statusText;
    }

    return data;
  }
}

export default RestaurantDbSource;
