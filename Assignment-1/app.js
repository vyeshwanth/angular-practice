(function(){

'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

 function LunchCheckController($scope)
 {
    $scope.lunchItems = '';
    $scope.lunchStatus = '';
    $scope.checkLunchItems = function(){
        $scope.lunchStatus = getLunchStatus($scope.lunchItems);
    }
}

function getLunchStatus(lunchItems)
{
    var lunchItemsArray = lunchItems.split(",");
    //Remove empty elements
    lunchItemsArray = lunchItemsArray.filter(removeEmptyStrings);
    var numberOfLunchItems = lunchItemsArray.length;

    if( numberOfLunchItems == 0 )
    {
        return 'Please enter data first';
    }
    else if ( numberOfLunchItems <=3 )
    {
        return 'Enjoy!';
    }
    else if( numberOfLunchItems > 3 )
    {
        return 'Too Much!';
    }

}

function removeEmptyStrings(lunchItem)
{
    return lunchItem.trim()!="";
}
})();
