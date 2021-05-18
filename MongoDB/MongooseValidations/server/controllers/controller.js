const Car = require('../models/model');

module.exports = {
    // CREATE
    createCar: (req, res) => {
        Car.create(req.body)
            .then(data => res.json({ message: "success", data: data }))
            .catch(err => res.json({ message: "error", error: err }));
    },
    // READ
    getCars: (req,res) => {
        Car.find()
            .then(data => res.json({ message: "success", data: data }))
            .catch(err => res.json({ message: "error", error: err }));
    },
    // UPDATE
    updateCar: (req,res) => {
        Car.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(data => res.json({ message: "success", data: data} ))
            .catch(err => res.json({ message: "error", error: err }));
    },
    addPassengerToCar: (req,res) => {
        Car.findByIdAndUpdate(req.params.id, { $push: { passengers: req.body } }, { new: true, runValidators: true })
            .then(data => res.json({ message: "success", data: data }))
            .catch(err => res.json({ message: "error", error: err }))
    }
    // DELETE
}