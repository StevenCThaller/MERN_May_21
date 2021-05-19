const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You must leave a name."],
        minlength: [2, "Your name must be at least 2 characters long."]
    },
    review: {
        type: String,
        minlength: [10, "If you're going to leave a reivew, please be more descriptive and write at least 10 characters."]
    },
    rating: {
        type: Number,
        required: [true, "You must leave a rating."],
        min: [1, "Rating cannot be less than 1 star."],
        max: [5, "Rating cannot be more than 5 stars."]
    }
}, { timestamps: true })

const TruckSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Food truck name is required."], 
        minlength: [5, "Name must be at least 5 characters in length."]
    },
    style: {
        type: String,
        required: [true, "Cuisine style is required."],
        minlength: [3, "Cuisine style must be at least 3 characters in length."]
    },
    description: {
        type: String,
        required: [true, "Description is required."],
        minlength: [10, "Food truck description must be at least 10 characters in length."]
    },
    reviews: [ReviewSchema]
}, { timestamps: true });

const Truck = mongoose.model("Truck", TruckSchema);

module.exports = Truck;