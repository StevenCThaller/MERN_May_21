const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/log_reg_demo_db', { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => console.log("Connection to DB established"))
    .catch(err => console.log("Something went wrong", err));