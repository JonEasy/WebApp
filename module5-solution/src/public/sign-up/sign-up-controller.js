(function() {
'use strict';
angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
    var signupCtrl = this;
    signupCtrl.user = {};
    signupCtrl.favDish = {};
    signupCtrl.showError = false;
    signupCtrl.showMessage = false;

    signupCtrl.signup = function(form) {
        if (form.$invalid) {
            return;
        }
            MenuService.getFavDish(signupCtrl.user.favDish).then(function (response) {
                signupCtrl.user.favDishDetails = response.data;
                console.log(signupCtrl.favDish);
                MenuService.saveUser(signupCtrl.user);
                signupCtrl.showMessage = true;

            }, function (error) {
                console.log(error)
                signupCtrl.showError = true;
            });
        }
    };
})();