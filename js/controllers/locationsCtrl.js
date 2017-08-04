angular.module('devmtnTravel')
  .controller('locationsCtrl',
  function($scope, mainSrv){ $scope.getTravelInfo = function(response){
    // console.log(mainSrv.travelInfo);
    $scope.travelInfo = mainSrv.travelInfo;

    return $scope.travelInfo;
  }
  $scope.getTravelInfo();
})
