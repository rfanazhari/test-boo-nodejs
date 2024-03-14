// controllers/commentController.js
const Comment = require('../model/comment');

// Controller function to insert a new comment
exports.insertComment = async (req, res) => {
    try {
        const comment = new Comment(req.body);
        await comment.save();
        res.status(201).send(comment);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Controller function to get a list of comments
exports.getComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        res.status(200).send(comments);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Controller function to update a comment by ID
exports.updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await Comment.findByIdAndUpdate(id, req.body, { new: true });
        if (!comment) {
            return res.status(404).send({ message: 'Comment not found' });
        }
        res.status(200).send(comment);
    } catch (error) {
        res.status(400).send(error);
    }
};
