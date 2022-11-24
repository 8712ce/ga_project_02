const db = require('./')

const seed_books = [
    {
        title: "Guns, Germs and Steel",
        author: "Jared Diamond",
        genre: "Nonfiction",
        subgenre: "Historical",
        description: "Guns, Germs and Steel examines the rise of civilization and the issues its development has raised throughout history.",
        image: "https://m.media-amazon.com/images/I/51-KH9CL1SL.jpg"
    },
    {
        title: "Enlightenment Now",
        author: "Steven Pinker",
        genre: "Nonfiction",
        subgenre: "Historical",
        description: "If you think the world is coming to an end, think again: People are living longer, healthier, freer, and happier lives, and while our problems are formidable, the solutions lie in the Enlightenment ideal of using reason and science.",
        image: "https://m.media-amazon.com/images/I/51baoEVDKJL._AC_SY780_.jpg"
    },
    {
        title: "Bury My Heart at Wounded Knee",
        author: "Dee Brown",
        genre: "Nonfiction",
        subgenre: "Historical",
        description: "Dee Brown's eloquent, meticulously documented account of the systematic destruction of the American Indian during the second half of the 19th century uses council records, autobiographies, and firsthand descriptions.",
        image: "https://m.media-amazon.com/images/I/51VBPBhxQIL._AC_SY780_.jpg"
    },
    {
        title: "Facing the Other Way: The Story of 4AD",
        author: "Martin Aston",
        genre: "Nonfiction",
        subgenre: "Biographical",
        description: "Combining the unique tastes of Watts-Russell and the striking design aesthetic of Vaughan Oliver, 4AD records were recognisable by their look as much their sound. In this comprehensive account concentrating on the label’s first two decades (up to the point that Watts-Russell left), music journalist Martin Aston explores the fascinating story with unique access to all the key players and pretty much every artist who released a record on 4AD during that time, and to its notoriously reclusive founder.",
        image: "https://m.media-amazon.com/images/I/51Dn0WOB7PL.jpg"
    },
    {
        title: "The Mystery of the Spiral Bridge",
        author: "Franklin W. Dixon",
        genre: "Fiction",
        subgenre: "Mystery",
        description: "Frank and Joe Hardy are determined to bring to justice the vicious criminals who kidnapped their detective father while he was investigation sabotage of a road-building project in the Kentucky wilderness. After Mr. Hardy's escape, the two young sleuths are spurred into action when he mumbles the word 'Felix' and they discover a dossier of a notorious ex-convict was stolen from his files. The trail leads them to New York City but ends abruptly in a cemetery! With the new clue of a spiral symbol the boys head to Kentucky as part of a highway construction crew to track down the kidnappers and saboteurs.",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388290853i/76963.jpg"
    },
    {
        title: "Harold and the Purple Crayon",
        author: "Crockett Johnson",
        genre: "Fiction",
        subgenre: "Fantasy",
        description: "As Harold draws his way in and out of adventure, children become fascinated by the wondrous magic of the purple crayon.",
        image: "https://m.media-amazon.com/images/I/51YSTWOrdDL._AC_SY780_.jpg"
    },
]

const seed_movies = [
    {
        title: "Once Upon a Time in the West",
        director: "Sergio Leone",
        genre: "Western",
        description: "Epic story of a mysterious stranger with a harmonica who joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
        image: "https://m.media-amazon.com/images/I/517nDe9crtL._AC_SY580_.jpg"
    },
    {
        title: "Me and You and Everyone We Know",
        director: "Miranda July",
        genre: "Drama",
        description: "An artist's world is turned upside down when she falls in love with a man who has two sons. This drama from Miranda July won the Originality of Vision prize at Sundance.",
        image: "https://s3.amazonaws.com/criterion-production/films/433136d75ef46cccd37a4bef02982ff0/RosnfpzufFCkgi4EcWSnvr8QRNyoPn_large.jpg"
    },
    {
        title: "Blade Runner",
        director: "Ridley Scott",
        genre: "Science Fiction",
        description: "Harrison Ford stars in this fascinating, dark vision of the near future as a policeman who tracks engineered humans--a Blade Runner.",
        image: "https://m.media-amazon.com/images/I/51ST8TQP63L._AC_SY580_.jpg"
    },
    {
        title: "Juno",
        director: "Jason Reitman",
        genre: "Drama",
        description: "A self-sufficient teenage girl navigates her way through an unplanned pregnancy in her own unique style. Oscar winner for Best Original Screenplay.",
        image: "https://m.media-amazon.com/images/I/41aJCS3fcYL._AC_SY580_.jpg"
    },
    {
        title: "The Texas Chainsaw Massacre",
        director: "Tobe Hooper",
        genre: "Horror",
        description: "Five youths on a weekend getaway fall prey to a depraved family of cannibals in Tobe Hooper's masterpiece of subversive horror",
        image: "https://m.media-amazon.com/images/I/51276E72APL._AC_SY580_.jpg"
    },
    {
        title: "Romeo and Juliet",
        director: "Franco Zeffirelli",
        genre: "Drama",
        description: "Shakespeare's romantic tragedy of two innocent teenagers who love one another despite the fact that their families are bitter enemies.",
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