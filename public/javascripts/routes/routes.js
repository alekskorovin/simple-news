app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/pages/home.html',
            controller: 'MainController',
            resolve: {
                postPromise: ['posts', function (posts) {
                    return posts.getAll();
                }]
            }
        })
        .state('posts', {
            url: '/posts/{id}',
            templateUrl: '/pages/posts.html',
            controller: 'PostsController',
            resolve: {
                post: ['$stateParams', 'posts', function ($stateParams, posts) {
                    return posts.get($stateParams.id);
                }]
            }
        })
        .state('login', {
            url: '/login',
            templateUrl: '/pages/login.html',
            controller: 'AuthentificationController',
            onEnter: ['$state', 'authorization', function ($state, authorization) {
                if (authorization.isLoggedIn()) {
                    $state.go('home');
                }
            }]
        })
        .state('register', {
            url: '/register',
            templateUrl: '/pages/registration.html',
            controller: 'AuthentificationController',
            onEnter: ['$state', 'authorization', function ($state, authorization) {
                if (authorization.isLoggedIn()) {
                    $state.go('home');
                }
            }]
        });

    $urlRouterProvider.otherwise('home');
}]);
