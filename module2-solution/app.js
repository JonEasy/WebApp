(function() {
'use strict';

angular.module('ShoppingListApp',[])

    .controller('ShoppingListController1',ShoppingListController1)
    .controller('ShoppingListController2',ShoppingListController2)
    .service("ShoppingListCheckOffService",ShoppingListCheckOffService)



ShoppingListController1.$inject =["ShoppingListCheckOffService"];
function ShoppingListController1(ShoppingListCheckOffService) {

    var showlist_tobuy =  this
    showlist_tobuy.items = ShoppingListCheckOffService.getItems_to_buy();


    showlist_tobuy.remove_and_add = function (itemIndex) {
        ShoppingListCheckOffService.remove_and_add(itemIndex)
    }



}
ShoppingListController2.$inject =["ShoppingListCheckOffService"];
function ShoppingListController2(ShoppingListCheckOffService) {

    var showList_bought =  this

    showList_bought.items = ShoppingListCheckOffService.getItems_bought();



}

function ShoppingListCheckOffService(){
    var service =this

    var to_buy = [{name:"cookies",quantity:"10"},{name:"milk",quantity:20},{name:"bread",quantity:15},{name:"Olive oil",quantity:5},{name:"letuce",quanitity:2}]
    var bought = []


    service.remove_and_add = function(itemIndex){

        bought.push(to_buy[itemIndex])
        console.log(to_buy)
        to_buy.splice(itemIndex,1)
        console.log(bought)

    }

    service.getItems_to_buy = function(){

        return to_buy
    }

    service.getItems_bought = function(){

        return bought
    }

}



})()






