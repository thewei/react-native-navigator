var navigate = require('./navigate')
module.exports = navigate;
module.exports.Router = require('./router');
module.exports.Route = require('./route');
module.exports.redirect = navigate.redirect;
module.exports.back = navigate.back;
