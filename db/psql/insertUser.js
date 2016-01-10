var db = require('../config.js');
//This function gets all clients from salesperson_client for a specific salesperson


var insertClientsString = "INSERT INTO clients (client_name) VALUES ([$clientName, $clientemail, $clientbirthday, $clientcompany, $clientzipcode, $clienttitle])"

module.exports = function(client, callback){
    return db.query(insertClientsString, client)
    .then(function(client){
      callback(null, client);
      return client;
    })
    .catch(function(error){
      callback(error, null);
      return error;
    });
}


