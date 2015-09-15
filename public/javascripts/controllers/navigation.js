app.controller('NavigationController', [
'$scope',
'authorization',
function ($scope, authorization) {
        $scope.isLoggedIn = authorization.isLoggedIn;
        $scope.currentUser = authorization.currentUser;
        $scope.logOut = authorization.logOut;
}]);
