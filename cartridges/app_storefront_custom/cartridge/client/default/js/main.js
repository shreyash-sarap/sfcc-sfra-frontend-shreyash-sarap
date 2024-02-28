window.jQuery = window.$ = require("jquery");
var processInclude = require("./util");

$(document).ready(function() {
    processInclude(require("../../../../../app_storefront_base/cartridge/client/default/js/main"));
    processInclude(require("./components/test"));
    // Included the slider.js file here.
    processInclude(require("./components/slider"));
});
