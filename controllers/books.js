// DEPENDENCIES //
const db = require("../models")
const express = require("express")
const router = express.Router()

// CREATE/POST ROUTE //
router.post('/', (req, res) => {
    if (req.body.visited) {
        req.body.visited = true
    } else {
        req.body.visited = false
    }
    db.Book.create(req.body, (err, book) => {
        res.redirect('/book/' + book._id)
    })
})