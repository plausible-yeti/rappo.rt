//var db = require('../../db/psql/insertUser.js');
var queryString = require('../../db/psql/index.js');
var db = require('../../db/config.js');


// This is where we call the DB function for creating new client
//THE METHODS IN THE USER-MODEL FILE WILL NEED TO EVENTUALLY BE MERGED INTO SAME FILE AS CLIENT-MODEL!!
//THEY BOTH INTERACT WITH THE CLIENTS TABLE

module.exports.insertUser = function(user, salesId, callback){
  console.log('in model, about to insert', user);
  console.log('query string is', queryString.insertUser);
	var queryParameters = [user.client_name, user.client_email, user.client_birthday, user.client_company, user.client_zipcode, user.client_title, user.client_image]; // added last argument - RY
  console.log('query length is', queryParameters);
    return db.query(queryString.insertUser, queryParameters)
    // .then(function(client){
    //   // console.log('inserted client is', client[0]);
    //   // clientId = client[0].client_id;
    //   //return callback(201, clientId);
    //   return clientId
    // })
    .then(function(client) {
      console.log('inserted client is', client[0]);
      clientId = client[0].client_id;
      console.log('about to insert to join, client id is', client[0].client_id, 'salesID is', salesId, 'queryString is', queryString.insertClientSales);
      return db.query(queryString.insertClientSales, [salesId, clientId]);
    })
    .then(function(result) {
        console.log('inserted', result, 'into join table');
        return callback(null, result);
      })
    .catch(function(error){
      console.log('error inserting to db, error is:', error);
      return callback(error, null);
      return error;
    });
  };

module.exports.getOneUser = function(userId, callback){
  // TO DO REFACTOR LATER
  return db.query('Select * from users where user__id = $1', [userId])
    .then(function(result){
      console.log(result)
    })
};

module.exports.reset = function() {
  console.log('getting here');
  return db.query(queryString.reset);
};

//     db.tx(function (t) {
//     // t = this;
//     // creating a sequence of transaction queries:
//     var q1 = t.one(queryString.insertUser, queryParameters);
//     var q2 = t.one("insert into audit(entity, id) values($1, $2) returning id",
//         ['users', 123]);

//     // returning a promise that determines a successful transaction:
//     return this.batch([q1, q2]); // all of the queries are to be resolved;
// })
//     .then(function (data) {
//         console.log(data); // printing successful transaction output;
//     })
//     .catch(function (error) {
//         console.log(error); // printing the error;
//     });

  //array of values which will be inserted to clients table
	var queryParameters = [user.client_name, user.client_email, user.client_birthday, user.client_company, user.client_zipcode, user.client_title, user.client_image]; // added last argument - RY
  
  //INSERT CLIENT TO CLIENT TABLE
  return db.query(queryString.insertUser, queryParameters)
  .then(function(client) {
    console.log('inserted client is', client[0]);
    clientId = client[0].client_id;

    //INSERT CLIENT-SALESPERSON RELATIONSHIP TO JOIN TABLE
    return db.query(queryString.insertClientSales, [salesId, clientId]);
  })
  .then(function(result) {
      console.log('inserted', result, 'into join table');

      //EXECUTE CALLBACK ON RESULT, AT THE MOMENT THE CONTROLLER WILL PASS THIS INTO res.json
      return callback(null, result);
    })
  .catch(function(error){
    console.log('error inserting to db, error is:', error);
    return callback(error, null);
    return error;
  });

  module.exports.getOneUser = function(userId, callback){
    // TO DO REFACTOR LATER - We want to move the query string from this file to db/psql -- see how this was done in other situations
    // where database queries happen
    return db.query('Select * from users where user__id = $1', [userId])
      .then(function(result){
        console.log(result)
      })
  }
		
}
