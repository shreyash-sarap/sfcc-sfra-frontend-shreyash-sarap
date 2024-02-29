$(document).ready(function() {
    processInclude(require("../../../../../app_storefront_base/cartridge/client/default/js/main"));
    processInclude(require("./components/test"));
    // Included the slider.js file here.
    processInclude(require("./components/slider"));
    processInclude(require("../../../../slick-1.8.1/slick/slick"));
    processInclude(require("../../../../slick-1.8.1/slick/slick.min"));
    processInclude(require("../../../../slick-1.8.1/slick/jquery.min"));
});
