"use strict";

var server = require("server");

server.get("Show", function(req, res, next) {
    var carouselURLs = {
        jqueryslickURL: "https://cdnjs.cloudflare.com/ajax/libs/jquery/1.7.2/jquery.min.js",
        slickURL: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"
    };
    res.render("/carousel", {
        carouselURLs
    });
    return next();
});

module.exports = server.exports();
