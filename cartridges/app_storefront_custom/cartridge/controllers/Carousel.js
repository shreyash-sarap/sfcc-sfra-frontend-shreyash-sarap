"use strict";
var server = require("server");
server.get("Show", function(req, res, next) {
    res.render("/carousel");
    return next();
});
module.exports = server.exports();
