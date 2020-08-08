(function() {
    'use strict';
    
    angular.module('public')
    .controller('MyInfoController', MyinfoController);
    MyinfoController.$inject = ['MenuService', 'ApiPath'];
    function MyinfoController(MenuService, ApiPath) {
        var myinfCtrl = this;
        myinfCtrl.apiPath = ApiPath;

        myinfCtrl.signedUp = false;

        myinfCtrl.user = MenuService.getUser();
        console.log('User is', myinfCtrl.user);
        if (angular.equals(myinfCtrl.user, {})) {
            myinfCtrl.signedUp = false;
        } else {
            myinfCtrl.signedUp = true;
        }
    };


})();