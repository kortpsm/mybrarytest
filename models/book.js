const mongoose = require('mongoose');
const coverImgBasePath = 'uploads/bookCovers'
const path = require('path')
const bookSchema = new mongoose.Schema({
    title: {
        type : String,
        required: true
    },
    description: {
        type : String,
    },
    publishDate: {
        type : Date,
        required: true
    },
    pageCount: {
        type: Number,
        required: true
    },
    createdAtDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    coverImageName: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Author"
    }

});

bookSchema.virtual("coverImagePath").get(function(){
    if(this.coverImageName != null){
        return path.join('/', coverImgBasePath, this.coverImageName)
    }
})

module.exports = mongoose.model('book', bookSchema);
module.exports.coverImgBasePath = coverImgBasePath