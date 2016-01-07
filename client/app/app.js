'use strict';

angular.module('client-recon', [
'ui.router',
'client-recon.dashboard',
'client-recon.services'
])
.config(function ($stateProvider, $httpProvider, $urlRouterProvider) {
 $urlRouterProvider.otherwise('/');
 $stateProvider
   .state('dashboard', {
     url: '/',
     templateUrl: 'app/dashboard/dashboard.html',
     controllerAs: 'dashboard',
     controller: 'DashboardController'
   });
   // .state('', {
   //    templateUrl: 'app/dashboard/dashboard.html',
   //   controllerAs: 'dashboard',
   //   controller: 'DashboardController'
   // });
 });
