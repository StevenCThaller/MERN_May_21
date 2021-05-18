const mongoose = require('mongoose');

const isWholeNumber = v => v === Math.floor(v)

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You must enter a passenger name."]
    },
    age: {
        type: Number,
        required: [true, "You must enger a passenger age."],
        min: [16, "Passenger must be at least 16 years old."]
    },
    phoneNumber: {
        type: String,
        required: [true, "You must enter a phone number."],
        validate: {
            validator: function(v) {
                return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number. Must follow xxx-xxx-xxxx format.`
        }
    }
});


const CarSchema = new mongoose.Schema({
    year: {
        type: Number,
        min: [1886, "You can't possibly have a car from before 1886."],
        max: [new Date().getFullYear()+1, "They don't release model years that far in advance."],
        required: [true, "You must enter a model year."],
        validate: {
            validator: isWholeNumber,
            message: props => `Year must be a whole number. You entered ${props.value}.`
        }
    },
    make: {
        type: String,
        minlength: [2, "There's no car company with less than 2 characters in its name."],
        maxlength: [30, "Server space isn't free, and there's no way a car company's name is actually that long."],
        required: [true, "You must enter a make."]
    },
    model: {
        type: String,
        maxlength: [30, "C'mon."]
    },
    doors: {
        type: Number,
        min: [0, "You can't have fewer than zero doors."],
        max: [10, "I'm being pretty lenient here, stop messing around."],
        required: [true, "You must enter a number of doors."],
        validate: {
            validator: isWholeNumber,
            message: props => `Doors must be a whole number. You entered ${props.value}.`
        },
    },
    convertible: {
        type: Boolean,
        default: false
    }, 
    // method 1: embed the definition directly
    // passengers: [{
    //     name: {
    //         type: String,
    //         required: [true, "You must enter a passenger name."]
    //     },
    //     age: {
    //         type: Number,
    //         required: [true, "You must enger a passenger age."],
    //         min: [16, "Passenger must be at least 16 years old."]
    //     },
    //     phoneNumber: {
    //         type: String,
    //         required: [true, "You must enter a phone number."],
    //         validate: {
    //             validator: function(v) {
    //                 return /\d{3}-\d{3}-\d{4}/.test(v);
    //             },
    //             message: props => `${props.value} is not a valid phone number.`
    //         }
    //     }
    // }]
    // method 2: define the schema and add it in
    passengers: [PersonSchema],
    driver: PersonSchema
}, { timestamps: true });

const Car = mongoose.model("Car", CarSchema);

module.exports = Car;
