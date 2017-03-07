(function(){

'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController)

CounterController.$inject = ['$scope', '$timeout'];

function CounterController($scope, $timeout)
{
    $scope.upCount = 0;

    $scope.upCounter = function(){
        // setTimeout(countIncrementor, 2000);
        $timeout(countIncrementor, 2000);
    };

    var countIncrementor = function(){
      // $scope.$apply(function(){
            $scope.upCount += 1;
            console.log('counter Incremented');
       //});
        //$scope.$digest(); //maually kickoff digest
    }

    // $scope.$watch('onceCounter', function (newValue, oldValue){
    //     console.log("Once Counter old value :", oldValue);
    //     console.log("Once Counter new value :", newValue);
    // });
    //
    // $scope.$watch('upCount', function(newValue, oldValue){
    //     console.log("Up Counter old value :", oldValue);
    //     console.log("Up Counter new value :", newValue);
    // })
}

})();
