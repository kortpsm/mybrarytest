<<<<<<< HEAD
const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true
    }
});

=======
const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true
    }
});

>>>>>>> 911c6d590edf8ea865ee411d5134878ae014fbb7
module.exports = mongoose.model('Author', authorSchema);