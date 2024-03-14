const express = require('express')
const router = express.Router();
const profileController = require("../controller/user.controller");
const commentController = require("../controller/comment.controller");

app.post('/profiles', profileController.insertProfile);
app.get('/profiles', profileController.getProfiles);
app.put('/profiles/:id', profileController.updateProfile);

app.post('/comments', commentController.insertComment);
app.get('/comments', commentController.getComments);
app.put('/comments/:id', commentController.updateComment);

module.exports = router