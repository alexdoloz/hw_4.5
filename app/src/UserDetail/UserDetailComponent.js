'use strict';


userApp.component('userDetail', {
    bindings: {
        user: "="
    },
    controller: function UserDetailCtrl($routeParams, UsersService) {
    
        this.userLoaded = false;
        console.log("ID", $routeParams.userId);
        var self = this;
        this.user = UsersService.get({
            userId: $routeParams['userId']
        }, function(successResult) {
            // Окей!
            console.log('success');
            self.notfoundError = false;
            self.userLoaded = true;
            self.activeTab = 1;
            self.disableControlTab = true;
        }, function(errorResult) {
            // Не окей..
            self.notfoundError = true;
            self.userLoaded = true;
        });
    
        this.user.$promise.then(function(result) {
            self.userLoaded = true;
        });
    
        this.deleteUser = function(userId) {
    
            this.user.$delete({
                userId: userId
            }, function(successResult) {
                // Окей!
                self.deletionSuccess = true;
            }, function(errorResult) {
                // Не окей..
                self.deletionError = true;
            });
        }
    },
    templateUrl: './src/UserDetail/UserDetail.html'
});
