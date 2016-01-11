
var userModel = require('../models/user-model.js')

module.exports.post = function(req, res) {
			// This is where we call the DB function for creating new user
			// TO DO: Make sure you send a response
			// Love your comments Rebecca!
			var salesID = req.params.user_id;
			console.log('in controller, SALES ID is', salesID);
			
			userModel.insertUser(req.body, salesID, function(user) {
				res.send(201, user);
			});

		};
	

