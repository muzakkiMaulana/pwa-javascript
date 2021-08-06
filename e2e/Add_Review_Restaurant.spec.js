const assert = require('assert');

/* eslint-disable no-undef */

Feature('Add Review Restaurant');

Before((I) => {
  I.amOnPage('/');
});

Scenario('Add review one restaurant', async (I) => {
  // select restaurant
  I.seeElement('.title-card a');
  I.click(locate('.title-card a').first());

  const searchQuery = 'random';

  I.fillField('#name-reviewer', searchQuery);
  I.fillField('#description-reviewer', searchQuery);

  I.click(locate('#btn-add-review'));

  I.seeElement(locate('.review-detail').last());

  const TextAddreview = await I.grabTextFrom(locate('#desc').last());

  assert.strictEqual(searchQuery, TextAddreview);
});
