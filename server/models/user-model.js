//var db = require('../../db/psql/insertUser.js');
var queryString = require('../../db/psql/index.js');
var db = require('../../db/config.js');

module.exports.insertUser = function(user, callback){
  console.log('in model, about to insert', user);
  console.log('query string is', queryString.insertUser);
	var queryParameters = [user.name, user.email, user.birthday, user.company, user.zipcode, user.title, user.image, user.id]; // added last argument - RY
  console.log('query length is', queryParameters.length);
    return db.query(queryString.insertUser, queryParameters)
    .then(function(client){
      console.log('inserted client is', client);
      callback(null, client);
      return client;
    })
    .catch(function(error){
      console.log('error inserting to db, error is:', err);
      callback(error, null);
      return error;
    });


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
		
}