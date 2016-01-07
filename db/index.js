//INDEX INTERACTS WITH CONTROLLER FILE IN SERVER

//init db 
require('./schema.js');
var db = require('./config.js');

//map all query strings
var getAllClientsString = require('./psql/getAllClients.js');


//export functions to interact with controller
module.exports = {
  getAllClients : function(salesPersonId){
    salesPersonId = salesPersonId.toString();
    return db.query(getAllClientsString+salesPersonId);
  }

  //add additional functions here
};