'use strict';

var _ = require('lodash');

var db = require('../../db');
var sql = require('../../db').sql;

// queries
var editOne = sql.editOneClient;

var Client = function () {

  /**
   * Update a client with a clientID and data object.
   * @param  {Number} clientId ID for client in database
   * @param  {Object} data     Key/Value pairs of fields to be updated.
   * @return {Object}          The client record updated
   */
  this.update = function(clientId, data){
    // take the data and make the SQL arguments
    var init = { columns: [], values: []};
    var query = _.reduce(data, function(acc, val, key) {
      acc.columns.push(key);
      acc.values.push(val);
      return acc;
    }, init);

    // stringify the arguments
    var columns = query.columns.join(', ');
    var values = query.values.join(', ');

    // performe the db transaction
    return db.query(editOne, [clientId, columns, values])
      .then(function(data){
        // return updated object to the caller
        return data;
      })
      .catch(function(err){
        // if there was a db problem forward the problem to the caller
        throw new Error('There was a problem updating the record', err);
      })
  }
};

module.exports = new Client();
