'use strict';
var db = require('../../db');
var Client = require('../models').client;

/**
 * Controllers for the clients route
 * `/api/clients` and `/api/users/:id/clients/:client_id`
 * @type {Object}
 */
module.exports = {
  /**
   * Get a particular client (clientId) for particular user (userId)
   * @param  {Object} req Http request from client. Has no payload but has a url param for userId, and ClientId
   * @param  {Object} res Http response from client. JSON data with the client data.
   * @return { None }     Side-effect is the call on res.send with the date.
   */
  get: function(req, res){
    var userid = req.params.user_id;
    var clientid = req.params.client_id;
    // This is where we call the DB function for getting particualr client
  },
  post: function(req,res){
    var userid = req.params.user_id;
    // This is where we call the DB function for creating a new client
  },
  put: function(req,res){
    var clientId = req.params.clientId;
    Client.update(clientId, req.body)
      .then(function(client){
        res.json(client);
      })
      .catch(function(err){
        res.status(204).send(err);
      });
    // This is where we call the DB function for updating a client
  }
}
