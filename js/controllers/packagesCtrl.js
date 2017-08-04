angular.module('devmtnTravel')
  .controller('packagesCtrl', function($scope, mainSrv){
    $scope.getPackageInfo = function(response){
      // console.log(mainSrv.packageInfo);
      $scope.packageInfo = mainSrv.packageInfo;

      return $scope.packageInfo;
    }
    $scope.getPackageInfo();
  })
