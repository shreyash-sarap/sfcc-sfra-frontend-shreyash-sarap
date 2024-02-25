'use strict';
// Created a controller to render our page on storefront.
var server = require('server');

server.get('Show', function (req, res, next) {
    res.render("service/rendering")

    next();
});

module.exports = server.exports();



