"use strict";

var server = require("server");
// Created a show endpoint to render the carousel.isml template
server.get("Show", function(req, res, next) {
    // Included all the slick URLs to be used in slider.
    var carouselURLs = {
        slickbasicURL: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css",
        slickthemeURL: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css",
        jqueryslickURL: "https://cdnjs.cloudflare.com/ajax/libs/jquery/1.7.2/jquery.min.js",
        slickURL: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"
    };

    var imageURLs = [];
    // A function to retrieve images and store in variable .
    function getImageURLs(id) {
        var baseURL = `https://source.unsplash.com/random/200x200?city,night=${id}`;

        return baseURL + id;
    }
    // Added a loop to get 8 random images
    for (let i = 1; i < 9; i++) {
        imageURLs.push(getImageURLs(i));
    }
    // Renddered the carousel.isml file
    res.render("/carousel", {
        carouselURLs,
        imageURLs
    });
    return next();
});

module.exports = server.exports();
