'use strict';

userApp.component('userList', {

    controller: function UserListCtrl($scope, UsersService) {

        this.users = UsersService.query();
    },

    templateUrl: './src/UserList/UserList.html'

});
