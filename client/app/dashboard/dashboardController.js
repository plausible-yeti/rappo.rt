angular.module('client-recon.dashboard', [])

.controller('DashboardController', function ($scope, ClientsApi, AppState) {
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

  initializeClients();
  });
