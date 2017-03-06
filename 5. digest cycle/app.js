(function(){

'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController)

CounterController.$inject = ['$scope'];

function CounterController($scope)
{
    $scope.onceCounter = 0;
    $scope.upCount = 0;
    $scope.name = 'yeshwanth';

    $scope.showNumberOfWatchers = function(){
        console.log("Number of watchers :", $scope.$$watchersCount);
    };

    $scope.countOnce = function(){
        $scope.onceCounter = 1;
    };

    $scope.upCounter = function(){
        $scope.upCount += 1;
    };

    // $scope.$watch('onceCounter', function (newValue, oldValue){
    //     console.log("Once Counter old value :", oldValue);
    //     console.log("Once Counter new value :", newValue);
    // });
    //
    // $scope.$watch('upCount', function(newValue, oldValue){
    //     console.log("Up Counter old value :", oldValue);
    //     console.log("Up Counter new value :", newValue);
    // })

    $scope.$watch(function(){
        console.log('Digest Cycle fired');
    })
}

})();
