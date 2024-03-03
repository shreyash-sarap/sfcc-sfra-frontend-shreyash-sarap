window.jQuery = window.$ = require('jquery');
var processInclude = require('./util');

$(document).ready(function () {
    processInclude(require('../../../../../app_storefront_base/cartridge/client/default/js/main'));
    processInclude(require('./components/test'));
    // included the clickPromo file here in main.js
    processInclude(require("./components/couponcode/clickPromo"));
});

