(function(){

'use strict';

angular.module('ScopeInheritanceApp', [])
.controller('ParentController', ParentController )
.controller('ChildController', ChildController);

ParentController.$inject = ['$scope'];

function ParentController($scope)
{
    $scope.parentValue = 1;
    $scope.pc = this;
    $scope.pc.parentValue = 1;
}

ChildController.$inject = ['$scope'];

function ChildController($scope)
{
    console.log('$scope.parentValue: ', $scope.parentValue);
    console.log('CHILD $scope :', $scope);

    $scope.parentValue = 5;
    console.log('*** Changed: $scope.parentValue = 5 ***');
    console.log('$scope.parentValue : ', $scope.parentValue);
    console.log($scope);

    $scope.pc.parentValue = 5;
    console.log('*** Changed: $scope.pc.parentValue = 5 ***');
    console.log('$scope.pc.parentValue : ', $scope.pc.parentValue);
    console.log($scope);
}

})();
