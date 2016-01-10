'use strict';

module.exports = {
  // user: require('./user-model'),
  client: require('./client-model'),
  db: require('../../db')

};

console.log(module.exports.db);
