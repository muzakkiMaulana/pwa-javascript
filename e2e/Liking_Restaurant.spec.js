/* eslint-disable no-undef */
Feature('Liking Restaurant');

Before((I) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking one restaurant', (I) => {
  I.see('Data Tidak di temukan', '.list-notfound');

  I.amOnPage('/');

  // select restaurant
  I.seeElement('.title-card a');
  I.click(locate('.title-card a').first());

  // add restaurant to favorite

  I.seeElement('#likeButton');
  I.click('#likeButton');

  // check item
  I.amOnPage('/#/favorite');
  I.seeElement('.list-item');

  // select item on favorite page
  I.seeElement('.title-card a');
  I.click(locate('.title-card a').first());

  // select cancel like
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // check item
  I.amOnPage('/#/favorite');
  I.see('Data Tidak di temukan', '.list-notfound');
});
