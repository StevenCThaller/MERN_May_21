const { createCar, getAllCars, getOneCar, updateCar, deleteCar } = require('../controllers/controller');

module.exports = app => {
    // CREATE
    app.post('/api/cars', createCar);
    // READ 
    app.get('/api/cars', getAllCars);
    app.get('/api/cars/:id', getOneCar);
    // UPDATE 
    app.put('/api/cars/:id', updateCar);
    // DELETE
    app.delete('/api/cars/:id', deleteCar);
}