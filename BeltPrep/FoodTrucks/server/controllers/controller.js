const Truck = require('../models/models');
module.exports = {
    // CREATE
    createTruck: (req, res) => {
        Truck.create(req.body)
            .then(truck => res.json({ message: "success", results: truck }))
            .catch(err => res.json({ message: "error", results: err }));
    },
    // READ
    getAllTrucks: (req, res) => {
        Truck.find()
            .then(trucks => res.json({ message: "success", results: trucks }))
            .catch(err => res.json({ message: "error", results: err }));
    },
    getOneTruck: (req, res) => {
        Truck.findById(req.params._id)
            .then(truck => res.json({ message: "success", results: truck }))
            .catch(err => res.json({ message: "error", results: err }));
    },
    // UPDATE
    updateTruck: (req, res) => {
        Truck.findByIdAndUpdate(req.params._id, req.body, { new: true, runValidators: true })
            .then(truck => res.json({ message: "success", results: truck }))
            .catch(err => res.json({ message: "error", results: err }));
    },
    addReview: (req, res) => {
        Truck.exists({ _id: req.params._id, "reviews.name": req.body.name })
            .then(exists => {
                if(exists){
                    return Promise.reject("You cannot leave more than 1 review on this truck.");
                } else {
                    return Truck.findByIdAndUpdate(req.params._id, { $push: { reviews: req.body } }, { new: true, runValidators: true })
                }
            })
            .then(truck => res.json({ message: "success", results: truck }))
            .catch(err => res.json({ message: "error", result: err }));
    },
    // DELETE
    deleteTruck: (req, res) => {
        Truck.findByIdAndDelete(req.params._id)
            .then(truck => res.json({ message: "success", results: truck }))
            .catch(err => res.json({ message: "error", results: err }));
    }
}