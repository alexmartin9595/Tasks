(function () {
    'use strict';
    
    var restaurantApp = angular.module('restaurantApp');
    
    function callback ($scope, pizzaService, ingredientService, orderService) {
        $scope.pizza = pizzaService.getPizza();
        $scope.getPizzaPriceById = pizzaService.getPizzaPriceById;
        $scope.getIngredientBiId = ingredientService.getIngredientById;
        $scope.addPizza = pizzaService.addPizza;
        $scope.getPriceById = ingredientService.getPriceById;
        $scope.getNameById = ingredientService.getNameById;
        $scope.getPhotoById = ingredientService.getPhotoById;
        $scope.createCustomOrder = orderService.createCustomOrder;
    
        $scope.showPopup = function () {
            $('.ingredients-popup').bPopup();
        }
    }
    
    restaurantApp.controller('PizzaController', ['$scope', 'pizzaService', 'ingredientService', 'orderService', callback]);    
})();
