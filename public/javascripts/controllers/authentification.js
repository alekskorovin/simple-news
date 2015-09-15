app.controller('AuthentificationController', [
'$scope',
'$state',
'authorization',
function ($scope, $state, authorization) {
        $scope.user = {};

        $scope.register = function () {
            authorization.register($scope.user).error(function (error) {
                $scope.error = error;
            }).then(function () {
                $state.go('home');
            });
        };

        $scope.logIn = function () {
            authorization.logIn($scope.user).error(function (error) {
                $scope.error = error;
            }).then(function () {
                $state.go('home');
            });
        };
}])
