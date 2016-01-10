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
      return $http.put('/api/users/' + 1 + '/clients/' + editedClient.client_id, editedClient)
        .then(function(res){
          return res.data;
        });
    }

    var getFeed = function(user_id, client_id) {
      //currently user is hard coded
      return $http.get('/api/users/' + 1 + '/clients/' + user_id + '/feed')
        .then(function(res){
          return res.data;
        });
    }

    return {
      getAll: getAll,
      addOne: addOne,
      editOne: editOne,
      getFeed: getFeed
    }
  });
