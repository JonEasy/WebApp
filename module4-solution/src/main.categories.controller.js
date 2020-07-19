(function() {
'use strict';
angular.module('data')
.controller('MainCategoriesController', MainCategoriesController);

MainCategoriesController.$inject = ['menus'];
function MainCategoriesController(menus) {
    var mainCategories = this;
    mainCategories.menus = menus;
}
})();