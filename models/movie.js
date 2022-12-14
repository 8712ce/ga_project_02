// DEPENDENCIES //
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// CREATE A MOVIE SCHEMA //
const movieSchema = new Schema(
    {
        title: { type: String, required: true },
        director: { type: String, required: true },
        genre: { type: String, enum: [ 'Action / Adventure', 'Biographical', 'Comedy', 'Documentary', 'Drama', 'Experimental', 'Fantasy', 'Historical', 'Horror', 'Mystery', 'Science Fiction', 'Thriller', 'War', 'Western' ] },
        description: { type: String },
        image: { type: String, default: '/assets/no_image.jpg' }
    }
)

// CREATE A MOVIE MODEL USING THE MOVIE SCHEMA //
const Movie = mongoose.model('Movie', movieSchema)

// EXPORT THE MOVIE MODEL, WILL BE ACCESSED IN 'INDEX.JS' //
module.exports = Movie