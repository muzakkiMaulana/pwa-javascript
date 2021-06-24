const restaurantCategoriesTemplate = (data, style) => `<div tabindex="0" class="content-categories" style="background: ${style};">${data}</div>`;

const loopingMenusElement = (data) => {
  let elementTemplate = '';
  data.forEach((element) => { elementTemplate += `<div tabindex="0" class="menu-detail bg-detail">${element.name}</div>`; });
  return elementTemplate;
};

const loopingReviewElement = (data) => {
  let elementTemplate = '';
  data.forEach((element) => {
    elementTemplate += `<div class="review-detail display-grid one-column-grid">
      <div class="profile-review"><span>${element.name}</span> | <small>${element.date}</small></div>
      <div>${element.review}</div>
    </div>
  `;
  });
  return elementTemplate;
};

const restaurantMenusTemplate = (data) => loopingMenusElement(data);

const restaurantReviewTemplate = (data) => loopingReviewElement(data);

export {
  restaurantCategoriesTemplate, restaurantMenusTemplate, restaurantReviewTemplate,
};
