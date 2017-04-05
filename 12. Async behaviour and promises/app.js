(function(){

'use strict';

angular.module('ShoppingListApp',[])
.controller('CartController', CartController)
.service('CartService', CartService)
.service('WeightLossFilterService', WeightLossFilterService);

CartController.$inject = ['CartService'];

function CartController(CartService)
{
    var cart1 = this;
    cart1.itemName = '';
    cart1.itemQuantity = '';
    cart1.addItem = function(){
        CartService.addItem(cart1.itemName, cart1.itemQuantity);
        cart1.itemName = '';
        cart1.itemQuantity = '';
    };
    cart1.items = CartService.getItems();
    cart1.removeItem = function($index){
        CartService.removeItem($index);
    }
}

CartService.$inject = ['$q', 'WeightLossFilterService']
function CartService($q, WeightLossFilterService)
{
    var service = this;
    var items = [];

    // service.addItem = function(itemName, itemQuantity){
    //   var promise = WeightLossFilterService.checkName(itemName);
      
    //   promise.then(function(response){
    //       var nextPromise = WeightLossFilterService.checkQuantity(itemQuantity);
    //       nextPromise.then(function(response){
    //             var item = {
    //                         name : itemName,
    //                         quantity : itemQuantity
    //                      }; 
    //             items.push(item);         
    //         }, function(errorResponse){
    //             console.log(errorResponse.message)
    //         });
    //   }, function(errorResponse){
    //       console.log(errorResponse.message);
    //   });

    service.addItem = function(itemName, itemQuantity){
        var namePromise = WeightLossFilterService.checkName(itemName);
        var quantityPromise = WeightLossFilterService.checkQuantity(itemQuantity); 

        $q.all([namePromise, quantityPromise])
        .then(function(response){
            var item = {
                            name : itemName,
                            quantity : itemQuantity
                         }; 
            items.push(item);
        })
        .catch(function(errorResponse){
            console.log(errorResponse.message);
        });
    }
       


    service.getItems = function(){
        return items;
    }

    service.removeItem = function(itemIndex)
    {
        items.splice(itemIndex, 1);
    }
}

WeightLossFilterService.$inject = ['$q', '$timeout'];

function WeightLossFilterService($q, $timeout)
{
    var service = this; 
    service.checkName = function(name){
        var deferred = $q.defer();
        var result   = {
                        message : 'Stay away from cookies'
                    };
        $timeout(function(){
            if(name.toLowerCase().indexOf('cookie') === -1)
            {
                deferred.resolve(result);
            }
            else
            {
                deferred.reject(result);
            }
        }, 3000);

        return deferred.promise;            

    };
    
    service.checkQuantity = function(quantity){
        var deferred = $q.defer();
        var result   = {
                        message : 'save from yourself'
                    };
        $timeout(function(){
            if( quantity < 6 )
            {
                deferred.resolve(result);
            }
            else
            {
                deferred.reject(result);
            }
        }, 1000);

        return deferred.promise;
    };

}

})();
