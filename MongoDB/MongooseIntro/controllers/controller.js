const Car = require('../models/model');


// MAIN difference between querying in the shell and querying here with mongoose?

// Shell: db.collection_name.create(data)
// Mongoose: model_name.create(data)
module.exports = {
    // CREATE
    createCar: (req,res) => {
        Car.create(req.body)
            .then(result => res.json({ message: "success", data: result }))
            .catch(err => res.json({ message: "success", error: err }))
    },
    // READ
    getAllCars: (req,res) => {
        Car.find()
            .then(result => res.json({ message: "success", data: result }))
            .catch(err => res.json({ message: "error", error: err }))
    },
    getOneCar: (req,res) => {
        Car.findById(req.params.id) // remember to set id as a route parameter in your routes
            .then(result => res.json({ message: "success", data: result }))
            .catch(err => res.json({ message: "error", error: err }))
    },
    // UPDATE
    updateCar: (req,res) => {
        Car.findByIdAndUpdate(req.params.id, req.body)
            .then(result => res.json({ message: "success", data: result }))
            .catch(err => res.json({ message: "error", error: err }))
    },
    // DELETE
    deleteCar: (req, res) => {
        Car.findByIdAndDelete(req.params.id) // make sure to set id as a route parameter in your routes
            .then(result => res.json({ message: "success", data: result }))
            .catch(err => res.json({ message: "error", error: err }))
    }
}