<<<<<<< HEAD
const mongoose = require('mongoose');
require('dotenv').config();

module.exports = async () => {
    await mongoose.connect(process.env.DATABASE_URL, {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(x => {
            console.log(
                `Connected to Mongo! Database name: "${x.connections[0].name}"`,
            );
        })
        .catch(err => {
            console.error('Error connecting to mongo', err);
        });
    return mongoose;
=======
const mongoose = require('mongoose');
require('dotenv').config();

module.exports = async () => {
    await mongoose.connect(process.env.DATABASE_URL, {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(x => {
            console.log(
                `Connected to Mongo! Database name: "${x.connections[0].name}"`,
            );
        })
        .catch(err => {
            console.error('Error connecting to mongo', err);
        });
    return mongoose;
>>>>>>> 911c6d590edf8ea865ee411d5134878ae014fbb7
};