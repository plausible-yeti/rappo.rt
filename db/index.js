//INDEX INTERACTS WITH CONTROLLER FILE IN SERVER

//init db 
require('./schema.js');
var db = require('./config.js');

//map all query strings
var getAllClientsString = require('./psql/getAllClients.js');


//export functions to interact with controller
module.exports = {
  //gets all clients through db
  getAllClients : require('./psql/getAllClients.js')

  //add additional functions here
};



