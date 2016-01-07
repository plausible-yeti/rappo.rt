
var db = require('../db');



module.exports = {
	dashboard: {
		get: function(req,res){
			var userid = req.params.user_id
			db.getAllClients(userid, function(result){
				res.JSON(result);	
			});
			// This is where we call the DB function for getting dashboard

		}
	},
	user: {
		post: function(req,res){
			// This is where we call the DB function for creating new user
			// TO DO: Make sure you send a response
		}	
	},
	client: {
		get: function(req,res){
			var userid = req.params.user_id;
			var clientid = req.params.client_id;
			// This is where we call the DB function for getting particualr client
		},
		post: function(req,res){
			var userid = req.params.user_id;
			// This is where we call the DB function for creating a new client
		},
		put: function(req,res){
			var user_id = req.params.user_id;
			// This is where we call the DB function for updating a client
		}
	}

}




