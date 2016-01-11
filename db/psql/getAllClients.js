var db = require('../config.js');
//This function gets all clients from salesperson_client for a specific salesperson


var getAllClientsString = "SELECT * FROM clients INNER JOIN clients_salespersons on (clients_salespersons.client_id = clients.client_id) WHERE clients_salespersons.salesperson_id = $1"

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


