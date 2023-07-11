//books.js 
//Balkesa Azimi
//student id: 301296835 
//Date: Sunday, June 25, 2023
//web app: Midterm


let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
