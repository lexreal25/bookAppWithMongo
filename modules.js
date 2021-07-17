//import mongoose
const mongoose = require('mongoose')
const { Schema } = mongoose
//bank model

//mongoose schema
const BookSchema = new Schema({
    author: String,
    title: String,
    gist: String,
    publisher: String,
    YOP: String 
})
//create model via mongoose
const BookModel = mongoose.model("Books", BookSchema)
module.exports = BookModel;