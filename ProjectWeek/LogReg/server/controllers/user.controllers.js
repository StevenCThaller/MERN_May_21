const User = require('../models/users.models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
module.exports = {
    // Create
    registerUser: (req,res) => {
        User.create(req.body)
            .then(user => {
                
                const token = jwt.sign({
                    id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName
                }, process.env.JWT_SECRET)

                res
                    .cookie('userToken', token, process.env.JWT_SECRET, { httpOnly: true })
                    .json({ message: "success", results: user })
            })
            .catch(err => res.json({ message: "error", results: err }))
    }, 
    login: (req, res) => {
        console.log(req.body)
        User.findOne({ email: req.body.email })
            .then(async (user) => {
                console.log(user);
                if(user === null) {
                    return Promise.reject("Invalid email/password");
                }
                console.log("what's broken?");
                let isValid = bcrypt.compare(req.body.password, user.password)
                console.log(isValid);
                return { user, valid: isValid };
            })
            .then(results => {
                const { user, valid } = results;
                console.log(results);
                if(!valid){
                    return Promise.reject("Invalid email/password");
                }

                const token = jwt.sign({
                    id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName
                }, process.env.JWT_SECRET);

                res
                    .cookie("userToken", token, process.env.JWT_SECRET, { httpOnly: true })
                    .json({ message: "success", results: user })
            })
            .catch(err => res.json({ message: "error", results: err}))
    },
    // Read
    logout: (req, res) => {
        res.clearCookie('userToken');
        res.json({ message: "success", results: "You have been logged out." });
    },
    getUsers: (req, res) => {
        User.find()
            .then(users => {
                console.log('you valid')
                res.json({ message: "success", results: users })
            })
            .catch(err => res.json({ message: "error", results: err }));
    }
    // Update
    // Delete
}