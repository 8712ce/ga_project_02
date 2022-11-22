// DEPENDENCIES //
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// CREATE A BOOK SCHEMA //
const bookSchema = new Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required: true },
        genre: { type: String, enum: [ 'fiction', 'nonfiction'], required: true },
        subgenre: { type: String, enum: [ 'Action / Adventure', 'Biographical', 'Comedy', 'Drama', 'Experimental', 'Fantasy', 'Graphic Novel', 'Historical', 'Horror', 'Mystery', 'Science Fiction', 'Thriller', 'War' ], required: true },
        rating: { type: Number, min: 0, max: 5 },
        image: { type: String, default: 'https://sainfoinc.com/wp-content/uploads/2018/02/image-not-available-570x570.jpg' }
    }
)

// CREATE A BOOK MODEL USING THE BOOK SCHEMA //
const Book = mongoose.model('Book', bookSchema)

// EXPORT THE BOOK MODEL, WILL BE ACCESSSED IN 'INDEX.JS' //
module.exports = Book