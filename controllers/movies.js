// DEPENDENCIES //
const db = require('../models')
const express = require('express')
const router = express.Router()

// NEW (GET/READ) ROUTE:  THIS ROUTE RENDERS A FORM THE USER WILL USE TO POST (CREATE) A NEW MOVIE. //
router.get('/new', (req, res) => {
    res.render('newMovie', {
        tabTitle: "Post a Movie"
    })
})

// CREATE (POST) ROUTE:  THIS ROUTE RECEIVES THE POST REQUEST SENT FROM THE NEW ROUTE ABOVE, PARSES IT INTO A MOVIE OBJECT, CREATES THE MOVIE OBJECT AS A DOCUMENT IN THE MOVIES COLLECTION, AND REDIRECTS THE USER TO THE SHOW PAGE FOR THE NEW MOVIE THAT WAS CREATED. //
router.post('/', (req, res) => {
    db.Movie.create(req.body, (err, movie) => {
        res.redirect('/movies/show/' + movie._id)
    })
})

// SHOW (GET/READ) ROUTE:  THIS ROUTE WILL SHOW AN INDIVIDUAL MOVIE DOCUMENT USING THE URL PARAMETER (WHICH WILL ALWAYS BE THE MOVIE DOCUMENT'S ID). //
router.get('/show/:id', (req, res) => {
    db.Movie.findById(req.params.id, (err, movie) => {
        res.render("showMovie", {
            movie: movie,
            tabTitle: "Movie: " + movie.title
        })
    })
})

// DELETE ROUTE:  THIS ROUTE ALLOWS US TO DELETE AN INDIVIDUAL MOVIE DOCUMENT USING THE URL PARAMETER (WHICH WILL ALWAYS BE THE MOVIE DOCUMENT'S ID). //
router.delete('/:id', (req, res) => {
    db.Movie.findByIdAndRemove(req.params.id, (err, movie) => {
        res.redirect('/')
    })
})

// EDIT (GET/READ) ROUTE:  THIS ROUTE RENDERS A FORM THE USER WILL USE TO EDIT (PUT) PROPERTIES OF AN EXISTING MOVIE. //
router.get('/:id/edit', (req, res) => {
    db.Movie.findById(req.params.id, (err, movie) => {
        res.render("editMovie", {
            movie: movie,
            tabTitle: "Edit"
        })
    })
})

// UPDATE (PUT) ROUTE:  THIS ROUTE RECEIVES THE PUT REQUEST SENT FROM THE EDIT ROUTE ABOVE, PARSES IT INTO A MOVIE OBJECT, EDITS THE SPECIFIED MOVIE OBJECT AS A DOCUMENT IN THE MOVIES COLLECTION, AND REDIRECTS THE USER BACK TO THE SHOW PAGE FOR THE UPDATED MOVIE. //
router.put('/:id', (req, res) => {
    db.Movie.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, movie) => {
        res.redirect('/movies/show/' + movie._id)
    })
})


module.exports = router