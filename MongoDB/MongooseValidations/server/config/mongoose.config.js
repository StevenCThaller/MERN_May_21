const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/validation_db', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection to the database established"))
    .catch(err => console.log("Something went wrong when connecting to the database", err))