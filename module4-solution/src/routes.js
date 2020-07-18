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
      categories: ['MenuDataService',function(MenuDataService){
        return MenuDataService.getAllCategories();
      }]
    }
  })

}

})();
