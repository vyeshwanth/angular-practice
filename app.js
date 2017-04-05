(function(){

angular.module('MenuCategoriesApp', [])
.controller('MenuCategoryController', MenuCategoryController)
.service('MenuCategoriesService', MenuCategoriesService)
.constant('API_BASE_PATH', 'http://davids-restaurant.herokuapp.com/');

MenuCategoryController.$inject = ['MenuCategoriesService'];

function MenuCategoryController(MenuCategoriesService)
{
    var menu = this;
    var promise = MenuCategoriesService.getMenuCategories();

    promise.then(function(response){
        menu.categories = response.data;
    }).catch(function(error){
        console.log('Something Went Wrong');
    });

    menu.getMenuItems = function(short_name){
        console.log('inside getMenuItems');
        var promise = MenuCategoriesService.getMenuItems(short_name);

        promise.then(function(response){
            console.log(response.data);
        }).catch(function(error){
            console.log('Something Went Wrong');
        })
    }
}

MenuCategoriesService.$inject = ['$http', 'API_BASE_PATH'];

function MenuCategoriesService($http, API_BASE_PATH)
{
    var service = this;

    this.getMenuCategories = function(){
        var response = $http({
            method : 'GET',
            url : API_BASE_PATH + 'categories.json',
        });

        return response;
    }

    this.getMenuItems = function(short_name){
        console.log('request being sent');
        var response = $http({
            method : 'GET',
            url : API_BASE_PATH + 'menu_items.json',
            params : {
                category : short_name
            }
        });

        return response;
    }
}
})()