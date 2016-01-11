angular.module('client-recon.client-profile.feed', [])
  .controller('FeedController', function ($scope, AppState, $state, ClientsApi) {
    this.data = AppState.state;
    //ClientsApi.getFeed(1, )
  });