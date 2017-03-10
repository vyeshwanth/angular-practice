(function(){

'use strict';

angular.module('ShoppingListApp',[])
.controller('CartController', CartController)
.controller('CartDisplayController', CartDisplayController)
.service('CartService', CartService);

CartController.$inject = ['CartService'];

function CartController(CartService)
{
    var itemAdder = this;
    itemAdder.itemName = '';
    itemAdder.itemQuantity = '';
    itemAdder.addItem = function(){
        CartService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
        itemAdder.itemName = '';
        itemAdder.itemQuantity = '';
    };
}

CartDisplayController.$inject = ['CartService'];

function CartDisplayController(CartService)
{
    var showCart = this;
    showCart.items = CartService.getItems();
    showCart.removeItem = function($index){
        CartService.removeItem($index);
    }
}

function CartService()
{
    var service = this;
    var items = [];

    service.addItem = function(itemName, itemQuantity){
      var item = {
           name : itemName,
           quantity : itemQuantity
       };
       items.push(item);
    }

    service.getItems = function(){
        return items;
    }

    service.removeItem = function(itemIndex)
    {
        items.splice(itemIndex, 1);
    }
}

})();
