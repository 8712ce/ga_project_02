// DEPENDENCIES //
const mongoose = require("mongoose");
require('dotenv').config()
// CONNECT TO MONGODB VIA MONGOOSE //
const connectionString = process.env.MONGO_DB_URI
// "mongodb://localhost/library" //
mongoose.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// CONSOLE.LOG() CONNECTION STATUS //
mongoose.connection.on('connected', () => {
    console.log('mongoose connected to ', connectionString);
});

mongoose.connection.on('disconnected', () => {
    console.log('mongoose disconnected to ', connectionString);
});

mongoose.connection.on('error', (error) => {
    console.log('mongoose error ', error);
});

// ACCESS MODELS //
module.exports.Book = require("./book.js");
module.exports.Movie = require("./movie.js");