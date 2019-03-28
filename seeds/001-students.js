
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'dylan', cohorts_id: 1},
        {name: 'matt', cohorts_id: 2},
        {name: 'jay', cohorts_id: 3}
      ]);
    });
};
