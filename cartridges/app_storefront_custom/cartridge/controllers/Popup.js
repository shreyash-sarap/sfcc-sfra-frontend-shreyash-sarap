"use script";

var server = require("server");

server.get("Show", (req, res, next) => {
    res.render("popup");

    return next();
});

module.exports = server.exports();
