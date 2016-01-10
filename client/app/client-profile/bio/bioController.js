angular.module('client-recon.client-profile.bio', [])
  .controller('BioController', function ($scope, AppState, $state) {
    var bio = this;
    bio.data = AppState.state;
  });