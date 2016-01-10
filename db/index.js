//INDEX INTERACTS WITH CONTROLLER FILE IN SERVER

//init db
require('./schema.js');

var db = require('./config');

// TODO: move string to psql
//map all query strings
var getAllClientsString = require('./psql/getAllClients.js');


//export functions to interact with controller
module.exports = {
  query: db.query,
  // all the sql string that are used in db.query
  sql: require('./psql'),
  // Move logic to model
  //gets all clients through db
  getAllClients : require('./psql/getAllClients.js')


  //add additional functions here
};



