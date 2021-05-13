// const controller = require('../controllers/controller')
const { getAll, getOne, updateOne, create } = require('../controllers/controller');


module.exports = app => {
    // Create
    app.post('/api/data', create);
    // Read
    app.get('/api/data', getAll);
    app.get('/api/data/:someParameter', getOne);
    // Update
    app.put('/api/data/:someValue', updateOne);
    // Delete   
}