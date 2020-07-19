(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['$stateParams', 'items'];
function ItemDetailController($stateParams, items) {
    var itemDetail = this;
    console.log(items)
    itemDetail.categoryShortName=items.category.short_name;
    itemDetail.categoryName=items.category.name;
    itemDetail.items=items.menu_items;
}

})();
