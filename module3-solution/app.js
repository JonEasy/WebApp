(function() {
'use strict';

angular.module("NarrowItDownApp", [])
    .service("MenuSearchService", MenuSearchService)
    .controller("NarrowItDownController", NarrowItDownController)
    .constant("ApiBasePath", "https://davids-restaurant.herokuapp.com/menu_items.json")
    .directive('foundMenus', foundMenusDirective);



function foundMenusDirective(){

    var ddo = {
        restrict: "E",
        templateUrl: 'foundMenus.html',
        scope: {
            foundItems: '<',
            onRemove: '&'
        },
    };

    return ddo;
}


NarrowItDownController.$inject = ["MenuSearchService"];
function NarrowItDownController(MenuSearchService) {

    var ctrl = this;
    ctrl.searchTerm = '';
    ctrl.found = []
    ctrl.getMatchedMenuItems = function () {
        console.log("SearchTerm seen in ctrl: ", ctrl.searchTerm );
        ctrl.found = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm )

    console.log("ctrl.found as seen at ctrl: ", ctrl.found);
    }
    ctrl.removeItem = function(itemIndex){
        ctrl.found.splice(itemIndex,1)
    }
};



MenuSearchService.$inject = ["$http", "ApiBasePath"];
function MenuSearchService($http, ApiBasePath) {
    var service = this
    var items = [];
    service.getMatchedMenuItems = function (searchTerm) {

        items= [];
        searchTerm = searchTerm.trim().toLowerCase()

        $http({
            method: "GET",
            url: (ApiBasePath)
        }).then(function (response){
            for ( var i = 0 ; i < response.data.menu_items.length ; i++ ) {
                if ( response.data.menu_items[i].name.toLowerCase().indexOf(searchTerm) !== -1 ) {
                    items.push( response.data.menu_items[i] );
                }
            }

        }).catch(function (error) {
            console.log("Error while retrieving the data.")
        });
        return items
    };

}

})();