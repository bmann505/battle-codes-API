const bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "admin"; ALTER SEQUENCE admin_id_seq RESTART WITH 5;')
    .then(function() {
      var hash1 = bcrypt.hashSync('sally', 8)
      var hash2 = bcrypt.hashSync('jj', 8)
      var hash3 = bcrypt.hashSync('yousif', 8)
      var hash4 = bcrypt.hashSync('brian', 8)
      var admins = [{
        id: 1,
        name: 'Sally',
        email: 'sally@sally.com',
        password: hash1
      }, {
        id: 2,
        name: 'jj',
        email: 'jj@jj.com',
        password: hash2
      }, {
        id: 3,
        name: 'yousif',
        email: 'yousif@yousif.com',
        password: hash3
      }, {
        id: 4,
        name: 'brian',
        email: 'brian@brian.com',
        password: hash4
      }];
      return knex('admin').insert(admins);
    });
};
