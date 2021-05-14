const mongoose = require('mongoose');

// each model (that you would like a collection in the database for) will contain 2 things:

// 1. The schema -- these are the rules that entries in the database must follow
const CarSchema = new mongoose.Schema({
    year: Number,
    make: String,
    model: String,
    doors: Number, 
    convertible: Boolean
}, { timestamps: true })

// 2. The model -- this is what we use to make the actual queries to the db
const Car = mongoose.model("Car", CarSchema);

module.exports = Car;