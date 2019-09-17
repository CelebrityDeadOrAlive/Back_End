
exports.seed = function(knex) {
  return knex('celebs').truncate()
    .then(function () {
      return knex('celebs').insert([
        { celebs_name: 'Chloe Anthony Wofford Morrison', celebs_info: 'novelist,essayist known for her book `The Bluest Eye`', celebs_age: 88, dead_or_alive: 'Dead', time_limit: 47 },
        { celebs_name: 'Cecily Tyson', celebs_info: 'actress and former fashion model spanning more than six decades or 3 score!', celebs_age: 94, dead_or_alive: 'Alive', time_limit: 29 },
        { celebs_name: 'Katherine Johnson', celebs_info: 'NASA research mathematician and based on a true story from the movie `Hidden Figures`', celebs_age: 101, dead_or_alive: 'Alive', time_limit: 17 },
        { celebs_name: 'Nichelle Nichols', celebs_info: 'singer that sung with Duke Ellington and Lionel Hampton & actress from the hit `Star Trek` that broke the television air waves by being the first co-star of a show to kiss a white actor.', celebs_age: 86, dead_or_alive: 'Alive', time_limit:  33},
        { celebs_name: 'Harry Belefonte', celebs_info: 'singer, activisit and actor, he became of the most successful pop stars in history.', celebs_age: 92, dead_or_alive: 'Alive', time_limit: 14 },
        { celebs_name: 'Rip Torn', celebs_info: 'He was an award-winning television, film and theater actor.', celebs_age: 88, dead_or_alive: 'Dead', time_limit: 36 },
        { celebs_name: 'John Singelton', celebs_info: 'The mastermind behind movies like `Boyz In The Hood` and videos like Micheal Jacksons `Remember The Time`', celebs_age: 51, dead_or_alive: 'Dead', time_limit: 51 },
        { celebs_name: 'Josephine Baker', celebs_info: 'French entertainer, activist, and French Resistnace Agent.', celebs_age: 68, dead_or_alive: 'Alive', time_limit: 59 },
      ]);
    });
};
