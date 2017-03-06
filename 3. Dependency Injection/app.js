(function (){
'use strict';
angular.module('DIapp', [])
.controller('DIController', DIController);

//But minifying this js file breaks the app
//Solution is pass the dependencies to be injected in an array
DIController.$inject = ['$scope', '$filter', '$injector'];
//Now minifer doesn't change the array because they are string literals
function DIController($scope, $filter, $injector)
{
    $scope.name = 'yeshwanth';
    $scope.upper = function(){
        var upCase = $filter('uppercase');
        $scope.name = upCase($scope.name);
    };
    console.log($injector.annotate(DIController));
}

})();
