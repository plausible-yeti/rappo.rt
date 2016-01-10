'use strict';

var sqlLoad = require('sql-load');
/**
 * This is a directory of all the SQL strings that are used by the database.
 * To add a Query, create a sql file in the `psql/` directory and then require it
 * in the module.exports object of this file.
 * @type {Object}
 */
module.exports = {
  getAllClients: sqlLoad('./get-all-clients'),
  editOneClient: sqlLoad('./edit-one-client'),
};
