app.controller('PostsController', [
'$scope',
'$stateParams',
'posts',
'post',
'authorization',
function($scope, $stateParams, posts, post, authorization) {
    $scope.post = post;

    $scope.authorization = authorization.isLoggedIn;

    $scope.addComment = function () {
        if ($scope.body === '') {
            return;
        }

        posts.addComment(post._id, {
            body: $scope.body,
            author: 'user',
        }).success(function (comment) {
            $scope.post.comments.push(comment);
        });

        $scope.body = '';
    };

    $scope.incrementCommentUpvotes = function (comment) {
        posts.upvoteComment(post, comment);
    };

}]);
