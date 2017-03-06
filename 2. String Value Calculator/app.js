(function (){
'use strict';
angular.module('myCalculator', [])
.controller('myNumericController', function($scope){
    $scope.name = '';
    $scope.totalNumericValue = 0;
    $scope.displayNumericValue = function(){
        $scope.totalNumericValue = totalStringValue($scope.name);
    }
});

function totalStringValue(string)
{
    var totalStringValue = 0;
    for(var i=0; i<string.length; i++)
    {
        totalStringValue += string.charCodeAt(i);
    }
    return totalStringValue;
}

})();
