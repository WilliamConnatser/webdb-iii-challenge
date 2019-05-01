
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {cohort_id: 1, name: 'John'},
        {cohort_id: 2, name: 'Johnny'},
        {cohort_id: 3, name: 'Johnston'}
      ]);
    });
};
