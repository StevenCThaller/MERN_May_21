const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors(), express.json(), express.urlencoded({ extended: true }));
require('./config/mongoose.config');

require('./routes/routes')(app);

app.listen(8000, () => console.log('Now listening on port 8000'));