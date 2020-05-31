(function () {
'use strict';

angular.module('Module1', [])

.controller('Module1Ctrl', lunchController)

  lunchController.$inject = ['$scope'];
  function lunchController($scope) {


    $scope.lunch = "";
    $scope.statelunch=""

    $scope.checklunch = function ()
    {
      $scope.statelunch =   calculateLengthLunch($scope.lunch);
    };

    function calculateLengthLunch(string) {
      console.log(string.length)
      const words = string.split(',')
      if (string==""){
        return "Please enter data first!"
      }
      if (words.length<=3){
        return "Enjoy"
      }
      if (words.length>3) {
        return "Too much!"
      }
    }




  }

})();
