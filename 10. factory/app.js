(function(){

'use strict';

angular.module('ShoppingListApp',[])
.controller('CartController', CartController)
.controller('CartController2', CartController2)
.factory('ShoppingListFactory', ShoppingListFactory);

CartController.$inject = ['ShoppingListFactory'];

function CartController(ShoppingListFactory)
{
    var cart1 = this;
    var shoppingList = ShoppingListFactory();
    cart1.itemName = '';
    cart1.itemQuantity = '';
    cart1.addItem = function(){
        shoppingList.addItem(cart1.itemName, cart1.itemQuantity);
        cart1.itemName = '';
        cart1.itemQuantity = '';
    };
    cart1.items = shoppingList.getItems();
    cart1.removeItem = function($index){
        shoppingList.removeItem($index);
    }
}

CartController2.$inject = ['ShoppingListFactory'];

function CartController2(ShoppingListFactory)
{
    var cart2 = this;
    var shoppingList = ShoppingListFactory(3);
    
    cart2.itemName = '';
    cart2.itemQuantity = '';
    cart2.addItem = function(){
       cart2.errorMessage = '';
       try
        {
            shoppingList.addItem(cart2.itemName, cart2.itemQuantity);
        }
        catch(error)
        {
            cart2.errorMessage = error.message;
        }
        cart2.itemName = '';
        cart2.itemQuantity = '';
    };

    cart2.items = shoppingList.getItems();
    cart2.removeItem = function($index){
        shoppingList.removeItem($index);
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

function ShoppingListFactory()
{
    var factory = function(maxItems){
        return new CartService(maxItems);
    };

    return factory;
}

})();
