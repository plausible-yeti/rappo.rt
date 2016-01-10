angular.module('client-recon.edit-client', [])
.controller('EditClientController', function ($scope, $timeout, ClientsApi, AppState) {
  // TEMPLATE FOR DATA
  this.data = AppState.state;
  var successfulPost = this.success;
  var currentClient = this.data.currentClient;

  this.newData = currentClient;

  this.putClient = function () {
    //DETECT USER ID FROM APP STATE
    ClientsApi.editOne(1, currentClient).then(function(res){
      // CALLED AFTER SUCCESSFUL POST
      successfulPost = true;

      // THE PURPOSE OF THE BELOW IS TO HAVE THE SUCCESSFUL POST 
      // NOTIFICATION ONLY SHOW FOR A FEW SECONDS AND DISAPPEAR
      $timeout(function(){
        successfulPost = false;
        $state.go('client-profile.bio');
      }, 2000);

    })

  };


  });
