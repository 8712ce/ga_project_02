// DEPENDENCIES //
const db = require("../models")
const express = require('express')
const router = express.Router()

// NEW (GET/READ) ROUTE:  THIS ROUTE RENDERS A FORM THE USER WILL USE TO POST (CREATE) A NEW BOOK. //
router.get('/new', (req, res) => {
    res.render('newBook.ejs', {
        tabTitle: "Post a Book"
    })
})

// CREATE (POST) ROUTE:  THIS ROUTE RECEIVES THE POST REQUEST SENT FROM THE NEW ROUTE ABOVE, PARSES IT INTO A BOOK OBJECT, CREATES THE BOOK OBJECT AS A DOCUMENT IN THE BOOKS COLLECTION, AND REDIRECTS THE USER BACK TO THE ROOT/HOME PAGE. //
router.post('/', (req, res) => {
    if (req.body.visited) {
        req.body.visited = true
    } else {
        req.body.visited = false
    }
    db.Book.create(req.body, (err, book) => {
        // res.send(book)
        res.redirect('/book/' + book._id)
    })
})

// SHOW (GET/READ) ROUTE:  THIS ROUTE WILL SHOW AN INDIVIDUAL BOOK DOCUMENT USING THE URL PARAMETER (WHICH WILL ALWAYS BE THE BOOK DOCUMENT'S ID). //
router.get('/:id', (req, res) => {
    db.Book.findById(req.params.id, (err, book) => {
        // res.send(book)
        res.render("showBook", {
            book: book,
            tabTitle: "Book: " + book.title
        })
    })
})

// DELETE ROUTE:  THIS ROUTE ALLOWS US TO DELETE AN INDIVIDUAL BOOK DOCUMENT USING THE URL PARAMETER (WHICH WILL ALWAYS BE THE BOOK DOCUMENT'S ID). //
router.delete('/:id', (req, res) => {
    db.Book.findByIdAndRemove(req.params.id, (err, book) => {
        res.redirect('/')
    })
})

// EDIT (GET/READ) ROUTE:  THIS ROUTE RENDERS A FORM THE USER WILL USE TO EDIT (PUT) PROPERTIES OF AN EXISTING BOOK. //
router.get('/:id/edit', (req, res) => {
    db.Book.findById(req.params.id, (err, book) => {
        res.render("editBook", {
            book: book,
            tabTitle: "Edit"
        })
    })
})

// UPDATE (PUT) ROUTE:  THIS ROUTE RECEIVES THE PUT REQUEST SENT FROM THE EDIT ROUTE ABOVE, PARSES IT INTO A BOOK OBJECT, EDITS THE SPECIFIED BOOK OBJECT AS A DOCUMENT IN THE BOOKS COLLECTION, AND REDIRECTS TEH USER BACK TO THE SHOW PAGE FOR TEH UPDATED BOOK. //
router.put('/:id', (req, res) => {
    db.Book.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, book) => {
        res.redirect('/book/' + book._id)
    })
})

module.exports = router