const { default: mongoose } = require("mongoose");

const commentSchema = new mongoose.Schema({
    name: String,
    surname: String,
    image: String,
    comment: String,
    rate: String,
    date: {
        type: Date,
        default: Date.now
    }
});


const Comment = mongoose.model('Comment' , commentSchema);
exports.Comment = Comment