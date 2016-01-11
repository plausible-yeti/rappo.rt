'use strict';

angular.module('client-recon.services', [])
  .factory('ClientsApi', function($http, $q){

    // make http request to server with current user object
    var getAll = function(user_id){
      return $http.get('/api/users/' + user_id + '/clients')
        .then(function(res){
        // this returns a promise, we need to update state
          return res.data;
        });
    }

    var addOne = function(user_id, clientObj){
      return $http.post('/api/users/' + user_id + '/clients', clientObj)
        .then(function(res){
          return res.data;
        })
    }

    var editOne = function(user_id, editedClient){
      //currently user is hard coded
      return $http.put('/api/users/' + user_id + '/clients/' + editedClient.client_id, editedClient)
        .then(function(res){
          return res.data;
        });
    }

    var getFeed = function(user_id, client_id) {
      //currently user is hard coded
      return $http.get('/api/users/' + user_id + '/clients/' + client_id + '/feed')
        .then(function(res){
          return res.data;
        });
    }

    var getTickets = function(team) {
      team = team.split(' ').join('-');
      return $http.get('http://api.seatgeek.com/2/events?performers.slug=' + team)
        .then(function(res){
          return res.data;
        });
    }

    return {
      getAll: getAll,
      addOne: addOne,
      editOne: editOne,
      getFeed: getFeed,
      getTickets: getTickets
    }
  });
