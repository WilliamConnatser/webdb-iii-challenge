
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {name: 'Web17'},
        {name: 'Web18'},
        {name: 'Web3000'}
      ]);
    });
};
