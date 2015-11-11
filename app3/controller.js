(function() {
angular.module('parseApp')
  .controller('parseController', function($scope, parseService) {
    $scope.types = ['7/11s', 'restaurant', 'strip-clubs', 'zoos', 'bars', 'deli', 'barbers/salons', 'time-machines', 'prisons'];

    $scope.addBiz = function() {
      parseService.postBiz($scope.biz)
      .then(function(res) {
        // console.log(res);
        $scope.biz = '';
      }, function(err) {
        alert("Failure");
      });
    };

    $scope.getBiz = function() {
      parseService.getBiz()
      .then(function(res){
        // console.log(res.data)
        $scope.biznesses = res.data.results;
      });
    }

    setInterval(function(){
      $scope.getBiz();
    }, 1000);






  });


})();
