const controller = require('../controllers/controller');

module.exports = app => {
    // CREATE
    app.post('/api/trucks', controller.createTruck);
    // READ
    app.get('/api/trucks', controller.getAllTrucks);
    app.get('/api/trucks/:_id', controller.getOneTruck);
    // UPDATE
    app.put('/api/trucks/:_id/update', controller.updateTruck);
    app.put('/api/trucks/:_id/review', controller.addReview);
    // DELETE
    app.delete('/api/trucks/:_id/delete', controller.deleteTruck);
}