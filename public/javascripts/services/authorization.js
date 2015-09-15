app.factory('authorization', ['$http', '$window', function ($http, $window) {
    var auth = {};

    auth.saveToken = function (token) {
        $window.localStorage['simple-news-token'] = token;
    };

    auth.getToken = function () {
        return $window.localStorage['simple-news-token'];
    }

    // Check if user is authorized
    auth.isLoggedIn = function () {
        var token = auth.getToken();

        if (token) {
            var payload = JSON.parse($window.atob(token.split('.')[1]));

            return payload.exp > Date.now() / 1000;
        } else {
            return false;
        }
    };

    // Get username from payload
    auth.currentUser = function () {
        if (auth.isLoggedIn()) {
            var token = auth.getToken();
            var payload = JSON.parse($window.atob(token.split('.')[1]));

            return payload.username;
        }
    };

    // Method for registering users
    auth.register = function (user) {
        return $http.post('/register', user).success(function (data) {
            auth.saveToken(data.token);
        });
    };

    // Post user to Login and store received Token
    auth.logIn = function (user) {
        return $http.post('/login', user).success(function (data) {
            auth.saveToken(data.token);
        });
    };

    // Logout function that removes the user's token from localStorage, logging the user out
    auth.logOut = function () {
        $window.localStorage.removeItem('simple-news-token');
    };

    return auth;
}])
