angular.module('client-recon.client-profile.feed', [])
  .controller('FeedController', function ($scope, AppState, $state) {
    var feed = this;
    feed.data = AppState.state;
  });
