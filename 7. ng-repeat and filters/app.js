(function(){

'use strict';

var shoppingList1 = ["Milk", "Donuts", "Cookies", "Chocolate", "Badham Milk", "Chocolate Cookies", "Butter Milk"];
var shoppingList2= [
    {
        name : "Milk",
        quantity : 5
    },
    {
        name : "Donuts",
        quantity : 10
    },
    {
        name : "Cookies",
        quantity : 100
    },
    {
        name : "Chocolate",
        quantity : 150
    }
]

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController)

ShoppingListController.$inject = ['$scope'];

function ShoppingListController($scope)
{
    $scope.shoppingList1 = shoppingList1;
    $scope.shoppingList2 = shoppingList2;
    
    $scope.addToList = function(){
        var newItem = {
            name : $scope.newItemName,
            quantity : $scope.newItemQuantity
        };

        shoppingList2.push(newItem);
    };
}

})();
