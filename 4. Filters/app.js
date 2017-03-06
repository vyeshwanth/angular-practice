(function(){

'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('loves', LovesFilter)
.filter('truth', TruthFilter);

MsgController.$inject = ['$scope', lovesFilter];

function MsgController($scope, lovesFilter)
{
    $scope.name = 'Yeshwanth';
    $scope.stateOfBeing = 'hungry';
    $scope.cookieCost = 30;

    $scope.sayMessage = function(){
        return 'Yeshwanth likes to eat healthy snacks at night';
    };

    $scope.sayLoveMessage = function(){
        var msg = 'Yeshwanth likes to eat healthy snacks at night';
        msg = lovesFilter(msg);
        return msg;
    }

    $scope.feedYeshwanth = function(){
        $scope.stateOfBeing = 'fed';
    };
}

function LovesFilter()
{
    return function(input){
        input = input || "";
        return input.replace('likes', 'loves');
    };
}

function TruthFilter()
{
    return function(input, target, replace){
        input = input || "";
        return input.replace(target, replace);
    }
}

})();
