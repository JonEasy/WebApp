(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.html'
  })

  .state('categories',{
    url:'/categories',
    templateUrl: 'src/templates/main.categories.template.html',
    controller: 'MainCategoriesController as mainCategories',
    resolve :{
      menus: ['MenuDataService',function(MenuDataService){
        return MenuDataService.getAllCategories();
      }]
    }
  })
  .state('items',{
    url:'/item-detail/{categoryShortName}',
    templateUrl: 'src/templates/main.item.detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    params: {
      categoryShortName: null,
      categoryName: null
    },
    resolve: {
      items:['$stateParams','MenuDataService',function($stateParams,MenuDataService){
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }
  });

}

})();
