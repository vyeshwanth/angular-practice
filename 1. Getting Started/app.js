(function (){
'use strict';
angular.module('myFirstApp', [])
.controller('myFirstController', function($scope){
    $scope.name = 'Yeshwanth';
    $scope.sayHello = function(){
        return 'Hello Angular';
    }
});

})();
