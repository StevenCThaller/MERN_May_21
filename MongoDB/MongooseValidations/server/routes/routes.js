const controller = require('../controllers/controller');

module.exports = app => {
    // CREATE
    app.post('/api/cars', controller.createCar);
    // READ
    app.get('/api/cars', controller.getCars);
    // UPDATE
    app.put('/api/cars/:id', controller.updateCar);
    // DELETE
}