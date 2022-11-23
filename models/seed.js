const db = require('./')

const seed_books = [
    {
        title: "Guns, Germs and Steel",
        author: "Jared Diamond",
        genre: "Nonfiction",
        subgenre: "Historical",
        rating: 5,
        image: "https://m.media-amazon.com/images/I/51-KH9CL1SL.jpg"
    },
    {
        title: "Enlightenment Now",
        author: "Steven Pinker",
        genre: "Nonfiction",
        subgenre: "Historical",
        rating: 5,
        image: "https://m.media-amazon.com/images/I/51baoEVDKJL._AC_SY780_.jpg"
    },
    {
        title: "Bury My Heart at Wounded Knee",
        author: "Dee Brown",
        genre: "Nonfiction",
        subgenre: "Historical",
        rating: 5,
        image: "https://m.media-amazon.com/images/I/51VBPBhxQIL._AC_SY780_.jpg"
    },
    {
        title: "Facing the Other Way: The Story of 4AD",
        author: "Martin Aston",
        genre: "Nonfiction",
        subgenre: "Biographical",
        rating: 5,
        image: "https://m.media-amazon.com/images/I/51Dn0WOB7PL.jpg"
    },
    {
        title: "The Mystery of the Spiral Bridge",
        author: "Franklin W. Dixon",
        genre: "Fiction",
        subgenre: "Mystery",
        rating: 5,
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388290853i/76963.jpg"
    },
    {
        title: "Harold and the Purple Crayon",
        author: "Crockett Johnson",
        genre: "Fiction",
        subgenre: "Fantasy",
        rating: 5,
        image: "https://m.media-amazon.com/images/I/51YSTWOrdDL._AC_SY780_.jpg"
    },
]

const seed_movies = [
    {
        title: "Once Upon a Time in the West",
        director: "Sergio Leone",
        genre: "Western",
        rating: 5,
        image: "https://m.media-amazon.com/images/I/517nDe9crtL._AC_SY580_.jpg"
    },
    {
        title: "Me and You and Everyone We Know",
        director: "Miranda July",
        genre: "Drama",
        rating: 5,
        image: "https://s3.amazonaws.com/criterion-production/films/433136d75ef46cccd37a4bef02982ff0/RosnfpzufFCkgi4EcWSnvr8QRNyoPn_large.jpg"
    },
    {
        title: "Blade Runner",
        director: "Ridley Scott",
        genre: "Science Fiction",
        rating: 5,
        image: "https://m.media-amazon.com/images/I/51ST8TQP63L._AC_SY580_.jpg"
    },
    {
        title: "Juno",
        director: "Jason Reitman",
        genre: "Drama",
        rating: 5,
        image: "https://m.media-amazon.com/images/I/41aJCS3fcYL._AC_SY580_.jpg"
    },
    {
        title: "The Texas Chainsaw Massacre",
        director: "Tobe Hooper",
        genre: "Horror",
        rating: 5,
        image: "https://m.media-amazon.com/images/I/51276E72APL._AC_SY580_.jpg"
    },
    {
        title: "Romeo and Juliet",
        director: "Franco Zeffirelli",
        genre: "Drama",
        rating: 5,
        image: "https://m.media-amazon.com/images/I/51drIKCxdYL._AC_SY580_.jpg"
    }
]

db.Book.deleteMany({}, (err, books) => {
    if (err) {
        console.log("Error occured in remove", err)
    } else {
        console.log("Removed all books")

        db.Book.insertMany(seed_books, (err, books) => {
            if (err) {
                console.log("Error occured in insertMany", err)
            } else {
                console.log("Created", books.length, "books")
            }
        })
    }
})

db.Movie.deleteMany({}, (err, movies) => {
    if (err) {
        console.log("Error occured in remove", err)
    } else {
        console.log("Removed all movie entries")

        db.Movie.insertMany(seed_movies, (err, movies) => {
            if (err) {
                console.log("Error occured in insertMany", err)
            } else {
                console.log("Created", movies.length, "movies")
            }
        })
    }
})