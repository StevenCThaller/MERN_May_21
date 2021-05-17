const Car = require('../models/model');

module.exports = {
    // CREATE
    createCar: (req, res) => {
        Car.create(req.body)
            .then(response => res.json({ message: "success", data: response }))
            .catch(err => res.json({ message: "error", error: err }));
    },
    // READ
    getCars: (req,res) => {
        Car.find()
            .then(response => res.json({ message: "success", data: response }))
            .catch(err => res.json({ message: "error", error: err }));
    },
    // UPDATE
    updateCar: (req,res) => {
        Car.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(response => res.json({ message: "success", data: response} ))
            .catch(err => res.json({ message: "error", error: err }));
    }
    // DELETE
}