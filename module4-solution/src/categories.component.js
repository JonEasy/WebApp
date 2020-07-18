(function (){
'use strict'
angular.module('data')
    .component('categories',{
        templateUrl: 'src/templates/menudata.template.html',
        bindings:{
            categories: '<'
        }
    });
})();