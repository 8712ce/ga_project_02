// DEPENDENCIES //
const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const methodOverride = require('method-override');

// ACCESS MODELS //
const db = require('./models')

// ACCESS CONTROLLERS //
const booksCtrl = require('./controllers/books')
const moviesCtrl = require('./controllers/movies')





// MIDDLEWARE //
// SET FOLDER FOR STATIC FILES //
app.use(express.static('public'))
// SET THE VIEW ENGINE TO EJS FOR OUR APP (THIS ALLOWS US TO RENDER EJS FILES WITHOUT USING '.EJS' AFTER FILE NAMES.) //
app.set('view engine', 'ejs')
// METHOD-OVERRIDE ALLOWS US TO INTERPRET POST REQUESTS FROM THE BROWSER AS ANOTHER REQUEST TYPE: DELETE, PUT, ETC. //
app.use(methodOverride('_method'));
// BODY PARSER: USED FOR POST/PUT/PATCH ROUTES: THIS WILL TAKE INCOMING STRINGS FROM THE BODY THAT ARE URL ENCODED AND PARSE THEM INTO AN OBJECT THAT CAN BE ACCESSED IN THE REQUEST PARAMETER AS A PROPERTY CALLED BODY (REQ.BODY). //
app.use(express.urlencoded({ extended: true }));
// AN EXAMPLE FUNCTION THAT SHOWS HOW MIDDLEWARE WILL BE RUN EVERY TIME A ROUTE IS ACCESSED. //
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});





// ROUTES //
// INDEX ROUTE (GET/READ): WE'LL LEAVE THIS ROUTE IN THE SERVER.JS SINCE IT AFFECTS BOTH MODELS//
app.get('/', (req, res) => {
    // QUERY BOOKS FROM THE DATABASE //
    db.Book.find({}, (err, books) => {
        // QUERY MOVIES FROM THE DATABASE //
        db.Movie.find({}, (err, movies) => {
            // RENDER 'INDEX.EJS' AFTER DATA HAS BEEN QUERIED //
            res.render('index', {
                books: books,
                movies: movies,
                tabTitle: 'Library'
            })
        })
    })
})

// ALL ROUTES AFFECTING THE BOOK MODEL:  THIS TELLS THE APP TO LOOK AT THE 'CONTROLLERS/BOOKS.JS' FILE TO HANDLE ALL ROUTES THAT BEGIN WITH 'LOCALHOST:3000/BOOK' //
app.use('/books', booksCtrl)

// ALL ROUTES AFFECTING THE MOVIE MODEL:  THIS TELLS THE APP TO LOOK AT THE 'CONTROLLERS/MOVIES.JS' FILE TO HANDLE ALL ROUTES THAT BEGIN WITH 'LOCALHOST:3000/MOVIE' //
app.use('/movies', moviesCtrl)





// LISTENER //
app.listen(port, () => {
    console.log(`App is running at localhost:${port}`)
})

