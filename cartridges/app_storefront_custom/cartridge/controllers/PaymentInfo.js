"use strict";

var server = require("server");
var csrfProtection = require("*/cartridge/scripts/middleware/csrf");
var consentTracking = require("*/cartridge/scripts/middleware/consentTracking");

server.get("Show", consentTracking.consent, server.middleware.https, csrfProtection.generateToken, function(
    req,
    res,
    next
) {
    var URLUtils = require("dw/web/URLUtils");
    var Resource = require("dw/web/Resource");

    var profileForm = server.forms.getForm("paymentInfo");
    profileForm.clear();

    res.render("paymentInfo/paymentInfo", {
        title: Resource.msg("paymentInfo.form.title", "forms", null),
        profileForm: profileForm,
        actionUrl: URLUtils.url("PaymentInfo-SubmitRegistration").toString()
    });

    next();
});

server.post(
    "SubmitRegistration",
    server.middleware.https,
    consentTracking.consent,
    csrfProtection.generateToken,
    function(req, res, next) {
        var Resource = require("dw/web/Resource");
        var URLUtils = require("dw/web/URLUtils");
        var profileForm = server.forms.getForm("paymentInfo");
        res.render("paymentInfo/paymentInfo", {
            title: Resource.msg("paymentInfo.form.title.edit", "forms", null),
            profileForm: profileForm,
            actionUrl: URLUtils.url("PaymentInfo-SubmitRegistration").toString()
        });

        next();
    }
);

module.exports = server.exports();
