app.controller('PostsController', [
'$scope',
'$stateParams',
'posts',
'post',
function($scope, $stateParams, posts, post) {
    $scope.post = post;

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
