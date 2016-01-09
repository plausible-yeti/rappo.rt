angular.module('client-recon.client-profile')
  .controller('ClientProfileController', function ($scope, ClientsApi, AppState) {
    var clientProfile = this;
    clientProfile.data = AppState.state;
    



    }
  });