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
        });

    $urlRouterProvider.otherwise('home');
}]);
