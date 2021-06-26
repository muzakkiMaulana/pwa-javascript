import CONFIG from './config';

const API_ENDPOINT = {
  LIST_RESTAURANT: (value = '') => `${CONFIG.BASE_URL}${value ? `search?q=${value}` : 'list'}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  // SEARCH: (param) => `${CONFIG.BASE_URL}search?q=${param}`,
  REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
