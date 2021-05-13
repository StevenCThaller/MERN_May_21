const faker = require('faker');
class FakeThing {
    constructor() {
        this.name = faker.name.firstName();
    }
}

module.exports = {
    // Create
    create: (req,res) => {
        res.json({ message: "you created a thing", thing: req.body })
    },
    // Read
    getAll: (req,res) => {
        // do whatever you need
        res.json({ message: "all the data" })
    },
    getOne: (req, res) => {
        // route parameters, as well as form data, are packaged into
        // our req.
        // form data: comes as req.body
        // route parameters: comes as req.params.nameOfParameter in route

        // do whatever you need
        res.json({ message: `just the one datum for: ${req.params.someParameter}` })
    },
    // Update
    updateOne: (req,res) => {
        // does something
        res.json({ message: `some updated data: ${req.params.someValue}`})
    }
    // Delete
}