
app.controller('MainController', ['$scope', 'posts', 'authorization', function ($scope, posts, authorization) {

    $scope.isLoggedIn = authorization.isLoggedIn;

    $scope.posts = posts.posts;

    $scope.addPost = function () {
        if (!$scope.title || $scope.title === '') {
            return;
        }
        posts.create({
            title: $scope.title,
            link: $scope.link,
        });
        $scope.title = '';
        $scope.link = '';
    };

    $scope.incrementUpvotes = function(post) {
        posts.upvote(post);
    };

}]);
