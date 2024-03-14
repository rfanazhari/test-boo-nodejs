const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    user_id: { type: Number, required: true },
    type: { type: String, required: true },
    title: { type: String, required: true },
    body: { type: String, required: true }
}, {versionKey: false});

const Comment = mongoose.model('comment', commentSchema);

module.exports = Comment;
