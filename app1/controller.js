(function() {
angular.module('myApp')
  .controller('mainCtrl', function($scope, myService) {

    $scope.getTalents = function() {
      $scope.talents = myService.getTalents();
    };
    $scope.getTalents();

  })




})();
