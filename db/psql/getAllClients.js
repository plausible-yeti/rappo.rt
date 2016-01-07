var db = require('../config.js');
//This function gets all clients from salesperson_client for a specific salesperson


var getAllClientsString = "SELECT * FROM client INNER JOIN salesperson_client on (salesperson_client.client_id = client.client_id) WHERE salesperson_client.salesperson_id = $1"

module.exports = function(salesPersonId, callback){
    return db.query(getAllClientsString, salesPersonId)
    .then(function(clients){
      callback(null, clients);
      return clients;
    })
    .catch(function(error){
      callback(error, null);
      return error;
    });
}


