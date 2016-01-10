
var userModel = require('../models/user-model.js')

module.exports.post = function(req, res) {
			// This is where we call the DB function for creating new user
			// TO DO: Make sure you send a response
			// Love your comments Rebecca!
			console.log('in controller, body is', req.body);
			console.log('data is', req.data);
			
			userModel.insertUser(req.body, function(user) {
				res.send(201, user);
			});

		};
	

