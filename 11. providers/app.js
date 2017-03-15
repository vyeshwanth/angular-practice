(function(){

'use strict';

angular.module('ShoppingListApp',[])
.controller('CartController', CartController)
.provider('CartService', CartServiceProvider)
.config(Config);

Config.$inject = ['CartServiceProvider'];

function Config(CartServiceProvider)
{
    CartServiceProvider.defaults.maxItems = 2;
}

CartController.$inject = ['CartService'];

function CartController(CartService)
{
    var cart1 = this;
    cart1.itemName = '';
    cart1.itemQuantity = '';
    cart1.addItem = function(){
        try
        {
            CartService.addItem(cart1.itemName, cart1.itemQuantity);
        }
        catch(error)
        {
            cart1.errorMessage = error.message;
        }
        cart1.itemName = '';
        cart1.itemQuantity = '';
    };
    cart1.items = CartService.getItems();
    cart1.removeItem = function($index){
        CartService.removeItem($index);
    }
}

function CartService(maxItems)
{
    var service = this;
    var items = [];

    service.addItem = function(itemName, itemQuantity){
      var item = {
           name : itemName,
           quantity : itemQuantity
       };
       if( (maxItems === undefined) || ( (maxItems !== undefined) && (items.length < maxItems) ) )
       {
           items.push(item);
       }
       else
       {
           throw new Error("Max Items Limit ("+ maxItems + ") reached");
       }
    }

    service.getItems = function(){
        return items;
    }

    service.removeItem = function(itemIndex)
    {
        items.splice(itemIndex, 1);
    }
}

function CartServiceProvider()
{
    var provider = this;
    
    provider.defaults = {
        maxItems : 10
    };
    
    provider.$get = function(){
        var newCartService = new CartService(provider.defaults.maxItems);
        return newCartService;
    };
}

})();
