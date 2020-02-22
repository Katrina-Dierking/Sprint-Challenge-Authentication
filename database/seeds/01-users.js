exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, username: 'Katrina', password: 'sprint'},
        {id: 2, username: 'Taran', password: 'sprint'},
        {id: 3, username: 'JT', password: 'sprint'},
        {id: 4, username: 'Gina', password: 'sprint'},
        {id: 5, username: 'CoffeeMilk', password: 'sprint'}
       ]);
    });
};
