var mongoose = require('mongoose');

// Schema for storing a comment data in database
var CommentSchema = new mongoose.Schema({
    body: String,
    author: String,
    upvotes: {
        type: Number,
        default: 0
    },
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
});

// Method for update 'upvotes' property and save a whole post in database
CommentSchema.methods.upvote = function (cb, cmt) {
    this.upvotes += 1;
    this.save(cb, cmt);
};

mongoose.model('Comment', CommentSchema);
