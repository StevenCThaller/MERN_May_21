const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/chat_app_db', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("DB Connection Established"))
    .catch(err => console.log("Something went wrong", err))