angular.module('client-recon', [
'ui-router'])
.config(function ($stateProvider, $httpProvider) {
  $stateProvider
    .state('dashboard', {
      url: '/',
      templateUrl: 'app/dashboard/dashboard.html',
      controllerAs: 'dashboard'
      controller: 'DashboardController'
    })
  } );
