'use strict';

var sqlLoad = require('sql-load');
var path = require('path');
/**
 * This is a directory of all the SQL strings that are used by the database.
 * To add a Query, create a sql file in the `psql/` directory and then require it
 * in the module.exports object of this file.
 * @type {Object}
 */
module.exports = {
  getAllClients: sqlLoad(path.join(__dirname, './get-all-clients')),
  editOneClient: sqlLoad(path.join(__dirname, './edit-one-client')),
};

console.log(module.exports.editOneClient);
