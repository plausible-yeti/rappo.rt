angular.module('client-recon.dashboard', [])

.controller('DashboardController', function ($scope, ClientsApi) {
  // Your code here

  $scope.data = {};

  var initializeClients = function () {
    ClientsApi.getAll()
      .then(function (clients) {
        console.log(clients);
        $scope.data.clients = clients;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  initializeClients();
  });
