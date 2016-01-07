'use strict';

angular.module('client-recon.services', [])
  .factory('ClientsApi', function($http, $q){

    // make http request to server with current user object
    var getAll = function(user_id){
      return $http.get('/api/users/' + user_id)
        .then(function(res){
        // this returns a promise, we need to update state
          return res.data;
        });
    }

    return {
      getAll: getAll
    }
  });
