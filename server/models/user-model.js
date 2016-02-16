//var db = require('../../db/psql/insertUser.js');
var queryString = require('../../db/psql/index.js');
var db = require('../../db/config.js');

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


// exports.insertUser = function(user, cb) {

// 	var queryString = require('load')
// 	var queryParameters = [user.name, user.email, user.birthday, user.company, user.zipcode, user.title];
// 	db.insertUser(queryParameters, function(err, result) {
// 		if(err){
// 					throw err;
// 				} else {
// 					cb(result);
// 				}
// 	})
