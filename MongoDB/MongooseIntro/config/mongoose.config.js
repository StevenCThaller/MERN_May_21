const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongoose_intro_demo_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DB connection established"))
    .catch(err => console.log("Something went wrong when connecting to the database: ", err));