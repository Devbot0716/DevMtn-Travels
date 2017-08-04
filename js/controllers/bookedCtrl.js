angular.module('devmtnTravel')
  .controller('bookedCtrl', function($scope, $state, mainSrv){
    // console.log($state.params);

      $scope.booked = mainSrv.bookedPackage($state.params.id);

       $scope.bookedImage =
        mainSrv.bookedPackage($state.params.image);
  })
