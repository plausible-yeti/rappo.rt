angular.module('client-recon.dashboard', [])

.controller('DashboardController', function ($scope, ClientsApi, AppState, $state) {
  // Your code here

  var dashboard = this;
  dashboard.data = AppState.state;

  var initializeClients = function () {
    ClientsApi.getAll(1)
      .then(function (clients) {
        console.log(clients);
        dashboard.data.clients = clients;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  dashboard.storeClient = function(index) {
    dashboard.currentClient = dashboard.data.clients[index]; 
    AppState.state.currentClient = dashboard.currentClient;
    console.log(AppState.state.currentClient);
    $state.go('client-profile.bio');
  }

  initializeClients();
  });
