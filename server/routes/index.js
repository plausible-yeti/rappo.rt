var controller = require('../controllers');
var helpers = require('../helpers')

module.exports = function(app, express) {
	app.get('/',function(req,res){
		console.log("Hello, this worked!")
	});

	// ROUTE FOR DISPLAYING DASHBOARD
	app.get('/api/users/:user_id/clients',controller.dashboard.get(req,res));

	
}

