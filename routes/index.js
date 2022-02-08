<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get('/', async (req, res) => {
    let books;
    try {
        books = await Book.find().sort({createdAt: 'desc'}).limit(10).exec()
    } catch (error) {
        books = []
        console.log(error)
    }
    res.render('index',{ books : books })
});

=======
const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get('/', async (req, res) => {
    let books;
    try {
        books = await Book.find().sort({createdAt: 'desc'}).limit(10).exec()
    } catch (error) {
        books = []
        console.log(error)
    }
    res.render('index',{ books : books })
});

>>>>>>> 911c6d590edf8ea865ee411d5134878ae014fbb7
module.exports = router;