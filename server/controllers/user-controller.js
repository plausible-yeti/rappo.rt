
var userModel = require('../models/user-model.js');
var twilio = require('../../api/twilio-api.js');

module.exports.post = function(req, res) {
			// This is where we call the DB function for creating new client
			//THE METHODS IN THE USER-CONTROLLER FILE WILL NEED TO EVENTUALLY BE MERGED INTO SAME FILE AS CLIENT-CONTROLLER!!
			//THEY BOTH INTERACT WITH THE CLIENTS TABLE
			

			//Capture the ID of the logged in salesperson from the request.param object.
			var salesID = req.params.user_id;
			console.log('in controller, SALES ID is', salesID);
			
			// Invoke model method which inserts user to the clients table, and subsquently inserts relevant id's into the clients_salespoersons join table
			// Sends response to client with either id of succesfully inserted 
			userModel.insertUser(req.body, salesID, function(user) {
				res.send(201, user);
				var message = {};
				console.log('req.body is', req.body);

				//construct object containing properties which will be used when calling Twillio Api
				message.recipient = req.body.client_name;
				message.company = req.body.client_company;
				console.log('about to send this to twilio:', message)

				//Call method which sends new client onboarded message via Twilio
				twilio(message);
			});

		};
	

