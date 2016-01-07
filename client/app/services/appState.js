angular.module('client-recon.appState', [])
  .factory('AppState', function(){
    var state = {};

    return {
      state: state
    };
  });