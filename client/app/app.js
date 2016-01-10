'use strict';

angular.module('client-recon', [
'ui.router',
'client-recon.dashboard',
'client-recon.appState',
'client-recon.services',
'client-recon.client-profile',
'client-recon.client-profile.bio',
'client-recon.new-client',
//'client-recon.client-feed',

])
.config(function ($stateProvider, $httpProvider, $urlRouterProvider) {
 $urlRouterProvider.otherwise('/');
 $stateProvider
   .state('dashboard', {
     url: '/',
     templateUrl: 'app/dashboard/dashboard.html',
     controllerAs: 'dashboard',
     controller: 'DashboardController'
   })
   .state('client-profile', {
     url: '/client-profile',
     templateUrl: 'app/client-profile/client-profile.html',
     controllerAs: 'clientProfile',
     controller: 'ClientProfileController'
   })
   .state('client-profile.bio',{
    parent:'client-profile',
     views:{
      'bio':{
        templateUrl: 'app/client-profile/bio/bio.html',
        controllerAs: 'bio',
        controller: 'BioController'
      }//,
      // 'feed':{
      //   templateUrl: 'app/client-profile/bio/bio.html',
      //   controllerAs: 'bio',
      //   controller: 'BioController'
      // }
     }
   })
   .state('new-client', {
    url: '/new-client',
    templateUrl: 'app/new-client/new-client.html',
    controllerAs: 'newClientCtrl',
    controller: 'NewClientController'
   });

 });
