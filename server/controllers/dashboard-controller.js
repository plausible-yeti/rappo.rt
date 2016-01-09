'use strict';

var db = require('../../db');

module.exports = {
  get: function(req,res){
    var userid = req.params.user_id
    db.getAllClients(userid, function(err,result){
      if(err){
        throw err;
      } else {
        res.json(result);
      }

    });
    // This is where we call the DB function for getting dashboard

  }
}
