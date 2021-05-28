const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(
    cookieParser(),
    cors({ credentials: true, origin: 'http://localhost:3000'}), 
    express.json(), 
    express.urlencoded({ extended: true })
);

require('./config/mongoose.config');
require('./routes/routes')(app);

app.listen(8000, () => console.log("Now listening on port 8000"));