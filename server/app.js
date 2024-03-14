'use strict';

const express = require('express');
const mongoose = require('mongoose');
const restApi = require("./routes/api");

const app = express();
const port =  process.env.PORT || 4001;

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URL || 'mongodb://fan:lupa_password@localhost:27018/mongo1');
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

// set the view engine to ejs
app.set('view engine', 'ejs');

// rest api
app.use("/rest/v1", restApi);

// routes
app.use('/', require('./routes/profile')());

// start server
const server = app.listen(port);
console.log('Express started. Listening on %s', port);
