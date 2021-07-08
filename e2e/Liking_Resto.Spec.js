const assert = require('assert');

Feature('Liking Movies');
 
Before(({ I }) => {
  I.amOnPage('/#/favourite');
});
 
Scenario('showing empty favourite restaurant', ({ I }) => {
  I.seeElement('#query');
  I.see('anda belum punya restaurant favorit.', '#favourite_empty');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('anda belum punya restaurant favorit.', '#favourite_empty');

  I.amOnPage('/');

  I.seeElement('.card-content h4 a');

  const firstResto = locate('#resto_title').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.seeElement('#fav_resto');

  const likedRestoTitle = await I.grabTextFrom('#resto_title');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});


Scenario('unlike one restaurant', async ({ I }) => {
  I.amOnPage('/');
  
  const firstResto = locate('#resto_title').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.seeElement('#fav_resto');

  const likedRestoTitle = await I.grabTextFrom('#resto_title');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);
  I.seeElement('#resto_title');
  I.click(locate('#resto_title').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.see('anda belum punya restaurant favorit.', '#favourite_empty');
});

Scenario('reviewing restaurant', ({ I }) => {
  I.amOnPage('/');

  I.click(locate('#resto_title').first());
  I.seeElement('#review-name');
  I.fillField('name', 'yudi');

  I.seeElement('#review-text');
  I.fillField('review', 'bagus ini');

  I.seeElement('#review-submit');
  I.click('#review-submit');
});
