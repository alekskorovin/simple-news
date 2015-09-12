var mongoose = require('mongoose');

// Schema for storing a post data in database
var PostSchema = new mongoose.Schema({
    title: String,
    link: String,
    upvotes: {
        type: Number,
        default: 0
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

// Method for update 'upvotes' property and save a whole post in database
PostSchema.methods.upvote = function (cb) {
    this.upvotes += 1;
    this.save(cb);
};

mongoose.model('Post', PostSchema);
