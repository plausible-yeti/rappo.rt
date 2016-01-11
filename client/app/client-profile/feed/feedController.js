angular.module('client-recon.client-profile.feed', [])
  .controller('FeedController', function ($scope, AppState, $state, ClientsApi) {
    var feed = this;
    feed.loading = true;
    feed.weatherShow = false;
    feed.messageHide = false;
    feed.subscriptions = AppState.state.currentClient.feed;
    
    ClientsApi.getFeed(1,AppState.state.currentClient.client_id)
    .then(function(receivedFeed){
      feed.loading = false;
      AppState.state.currentClient.feed = receivedFeed;
      feed.subscriptions = AppState.state.currentClient.feed;
      feed.subscriptions.weather = JSON.parse(feed.subscriptions.weather);
      if(feed.subscriptions.weather.main.temp !== undefined){
        feed.weatherShow = true;
      }
      feed.subscriptions.weather.main.temp = (feed.subscriptions.weather.main.temp - 273) * 1.8 + 32;
      feed.subscriptions.weather.main.convertedTemp =  feed.subscriptions.weather.main.temp.toString().split('.')[0];
      feed.subscriptions.weather.weather[0].iconUrl = 'http://openweathermap.org/img/w/' + feed.subscriptions.weather.weather[0].icon + '.png';
    });
    
  });

