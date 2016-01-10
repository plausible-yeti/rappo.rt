//var db = require('../../db/psql/insertUser.js');
var queryString = require('../../db/psql/index.js')

var insertUser = function(user, callback){

	var queryParameters = [user.name, user.email, user.birthday, user.company, user.zipcode, user.title, user.image, user.company];

    return db.query(queryString.insertUser, queryParameters)
    .then(function(client){
      callback(null, client);
      return client;
    })
    .catch(function(error){
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