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



// ACCESS MODELS //
module.exports.Book = require("./book.js");
module.exports.Movie = require("./movie.js");