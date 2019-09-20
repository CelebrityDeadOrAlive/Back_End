const celebsData = require('../../data/celebs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('celebs', Promise)
    .del()
    .then(() => {
      return knex('celebs').insert(celebsData);
    })
    .then(() => {
      let celebPromises = [];
      celebsData.forEach(celeb => {
        let newCeleb = celeb.newCeleb;
        celebPromises.push(addCeleb(knex, celeb, newCeleb));
      });

      return Promise.all(celebPromises);
    });
};

const addCeleb = (knex, celeb, newCeleb) => {
  return knex('celebs').insert({
    celebs_name: celeb.celebs_name,
    is_alive: celeb.is_alive,
    id: celeb.id
  });
};
