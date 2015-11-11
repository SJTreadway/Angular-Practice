(function() {
angular.module('insultApp')
  .service('insultService', function(){

    var array1 = ["nerd", "jackass", "dummy"];
    var array2 = ["idiot", "fatty", "loser"];
    var array3 = ["unathletic", "slow", "donkey"];

    function findRandom(arr) {
      return arr[(Math.floor(Math.random() * arr.length - 1))];
    }

    this.getInsult = function() {
      return (findRandom(array1) + ' ' + findRandom(array2) + ' ' + findRandom(array3));
    }

  });

})();
