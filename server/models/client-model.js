'use strict';
var _ = require('lodash');


var db = require('./').db;
console.log('In client model', db.sql);
var sql = db.sql;

// queries
var editOne = sql.editOneClient;

var Client = function () {

  this.update = function(clientId, data){
  var init = { columns: [], values: []};
  var query = _.reduce(data, function(acc, val, key) {
    acc.columns.push(key);
    acc.values.push(val);
    return acc;
  }, init);

  return db.query(editOne, [clientId, query.columns.join(', '), query.values.join(', ')]);
  }
};

module.exports = Client;

