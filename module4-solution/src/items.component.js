(function (){
'use strict'
angular.module('data')
.component('items',{
    templateUrl: 'src/templates/menudata.template.html',
    bindings:{
    items: '<'
    }
    });
})();