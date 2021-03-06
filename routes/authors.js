<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const Author = require('../models/author')
//All Authors Route
router.get('/', async (req, res) => {
    let searchOptions = {};
    if(req.query.name != null && req.query.name != ''){
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try {
        const authors = await Author.find(searchOptions)
        res.render('authors/index', {
                authors: authors,
                searchOptions: req.query
            });
    } catch (error) {
        res.redirect('/')
    }
    
});

//New Authors Route
router.get('/new', (req, res)=>{
    res.render('authors/new', {author: new Author()});
});

//Creat Author Route
router.post('/', async (req, res)=>{
    const author = new Author({
        name : req.body.name
    });
    try {
        const newAuthor = await author.save()
        res.redirect('authors');
    } catch (err){
        let locals = {errorMessage: "Error Creating Author"}
            res.render("authors/new", {
                author: author,
                locals: locals
             })
             console.log(err);
    }
});

=======
const express = require('express');
const router = express.Router();
const Author = require('../models/author')
//All Authors Route
router.get('/', async (req, res) => {
    let searchOptions = {};
    if(req.query.name != null && req.query.name != ''){
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try {
        const authors = await Author.find(searchOptions)
        res.render('authors/index', {
                authors: authors,
                searchOptions: req.query
            });
    } catch (error) {
        res.redirect('/')
    }
    
});

//New Authors Route
router.get('/new', (req, res)=>{
    res.render('authors/new', {author: new Author()});
});

//Creat Author Route
router.post('/', async (req, res)=>{
    const author = new Author({
        name : req.body.name
    });
    try {
        const newAuthor = await author.save()
        res.redirect('authors');
    } catch (err){
        let locals = {errorMessage: "Error Creating Author"}
            res.render("authors/new", {
                author: author,
                locals: locals
             })
             console.log(err);
    }
});

>>>>>>> 911c6d590edf8ea865ee411d5134878ae014fbb7
module.exports = router;