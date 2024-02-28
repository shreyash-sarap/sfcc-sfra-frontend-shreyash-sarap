"use strict";

var server = require("server");

server.get("Show", function(req, res, next) {
    var carouselURLs = {
        slickbasicURL: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css",
        slickthemeURL: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css",
        jqueryslickURL: "https://cdnjs.cloudflare.com/ajax/libs/jquery/1.7.2/jquery.min.js",
        slickURL: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"
    };

    var imageURLs = [];

    function getImageURLs(id) {
        var baseURL = `https://source.unsplash.com/random/200x200?city,night=${id}`;

        return baseURL + id;
    }

    for (let i = 1; i < 9; i++) {
        imageURLs.push(getImageURLs(i));
    }

    res.render("/carousel", {
        carouselURLs,
        imageURLs
    });
    return next();
});

module.exports = server.exports();
