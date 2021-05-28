
module.exports = app => {
    app.use('/api/users', require('./user.routes'));
}