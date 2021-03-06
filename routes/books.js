<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const Book = require('../models/book')
const Author = require('../models/author');
const path = require('path');
const fs = require('fs');
const uploadPath = path.join("public", Book.coverImgBasePath)
const multer = require("multer");
const imgMimeTypes =['image/jpeg', 'image/png', 'image/gif']
const upload = multer({
    dest:uploadPath,
    fileFilter: (req, file, callback)=>{
        callback(null,  imgMimeTypes.includes(file.mimetype))
    }
})
//All book Route
router.get('/', async (req, res) => {
    let query = Book.find()
    if(req.query.title != null && req.query.title != ''){
        query = query.regex('title', new RegExp(req.query.title, 'i'))
    }
    if(req.query.publishedBefore != null && req.query.publishedBefore != ''){
        query = query.lte('publishDate', req.query.publishedBefore)
    }
    if(req.query.publishedAfter != null && req.query.publishedAfter != ''){
        query = query.gte('publishDate', req.query.publishedAfter)
    }
   try {
       const books = await query.exec()
            res.render('books/index',{
            books:books,
            searchOptions:req.query
       })
   } catch (error) {
       res.redirect('/')
       console.log(error)
       
   }
});

//New book Route
router.get('/new', async (req, res)=>{
    renderNewPage(res, new Book())
});

//Creat book Route
router.post('/',upload.single('cover'), async (req, res)=>{
    const fileName = req.file != null ? req.file.filename : null
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        publishDate: new Date(req.body.publishDate),
        pageCount: req.body.pageCount,
        coverImageName: fileName,
        description: req.body.description
    })
     try {
         const newBook = await book.save()
         res.redirect('books');
     } catch (error) {
         if(book.coverImageName != null){
             removerBookCover(book.coverImageName)

         }
        renderNewPage(res, book, true)
     }
});

function removerBookCover(fileName){
    fs.unlink(path.join(uploadPath, fileName), err =>{
        if(err) console.error(err)
    })
}

async function renderNewPage(res,book, hasError = false){
    try {
        const authors = await Author.find({});
        const book = new Book();
        const params = {
            authors: authors,
            book: book
        };
        if (hasError) params.errorMessage = 'Error creating book';
        res.render('books/new',params);
    } catch (error) {
        res.redirect("/books");
    }
}

=======
const express = require('express');
const router = express.Router();
const Book = require('../models/book')
const Author = require('../models/author');
const path = require('path');
const fs = require('fs');
const uploadPath = path.join("public", Book.coverImgBasePath)
const multer = require("multer");
const imgMimeTypes =['image/jpeg', 'image/png', 'image/gif']
const upload = multer({
    dest:uploadPath,
    fileFilter: (req, file, callback)=>{
        callback(null,  imgMimeTypes.includes(file.mimetype))
    }
})
//All book Route
router.get('/', async (req, res) => {
    let query = Book.find()
    if(req.query.title != null && req.query.title != ''){
        query = query.regex('title', new RegExp(req.query.title, 'i'))
    }
    if(req.query.publishedBefore != null && req.query.publishedBefore != ''){
        query = query.lte('publishDate', req.query.publishedBefore)
    }
    if(req.query.publishedAfter != null && req.query.publishedAfter != ''){
        query = query.gte('publishDate', req.query.publishedAfter)
    }
   try {
       const books = await query.exec()
            res.render('books/index',{
            books:books,
            searchOptions:req.query
       })
   } catch (error) {
       res.redirect('/')
       console.log(error)
       
   }
});

//New book Route
router.get('/new', async (req, res)=>{
    renderNewPage(res, new Book())
});

//Creat book Route
router.post('/',upload.single('cover'), async (req, res)=>{
    const fileName = req.file != null ? req.file.filename : null
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        publishDate: new Date(req.body.publishDate),
        pageCount: req.body.pageCount,
        coverImageName: fileName,
        description: req.body.description
    })
     try {
         const newBook = await book.save()
         res.redirect('books');
     } catch (error) {
         if(book.coverImageName != null){
             removerBookCover(book.coverImageName)

         }
        renderNewPage(res, book, true)
     }
});

function removerBookCover(fileName){
    fs.unlink(path.join(uploadPath, fileName), err =>{
        if(err) console.error(err)
    })
}

async function renderNewPage(res,book, hasError = false){
    try {
        const authors = await Author.find({});
        const book = new Book();
        const params = {
            authors: authors,
            book: book
        };
        if (hasError) params.errorMessage = 'Error creating book';
        res.render('books/new',params);
    } catch (error) {
        res.redirect("/books");
    }
}

>>>>>>> 911c6d590edf8ea865ee411d5134878ae014fbb7
module.exports = router;