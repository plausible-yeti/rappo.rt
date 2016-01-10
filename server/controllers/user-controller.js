
var userModel = require('../../models.user-model.js'))

user: {
		post: function(req, res){
			// This is where we call the DB function for creating new user
			// TO DO: Make sure you send a response
			// Love your comments Rebecca!
			console.log(req.body)
			
			userModel.insertuser(req.body, function(user) {
				res.send(201, user);
			});

		}	
	}

