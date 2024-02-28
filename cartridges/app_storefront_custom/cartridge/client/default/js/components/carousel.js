// This file is not being used in the slider.
$(document).ready(function() {
    $(".slider-for").slick({
        arrows: true,
        prevArrow:
            '<img src="https://cdn.shopify.com/s/files/1/0525/4699/4359/files/left.png" style="width:48px;z-index:2;position:absolute;top:48%;left:10%;cursor:pointer">',
        nextArrow:
            '<img src="https://pixsector.com/cache/ef1ee4a1/av85f1b171d762037fe92.png" style="width:40px;z-index:2;position:absolute;top:50%;right:10%;cursor:pointer">'
    });
    $(".slider-nav").slick({
        centerMode: true,
        arrows: true,
        dots: true,
        centerPadding: "0px",
        slidesToShow: 3,
        prevArrow:
            '<img src="https://cdn.shopify.com/s/files/1/0525/4699/4359/files/left.png" style="width:48px;z-index:2;position:absolute;top:38%;left:0%;cursor:pointer">',
        nextArrow:
            '<img src="https://pixsector.com/cache/ef1ee4a1/av85f1b171d762037fe92.png" style="width:40px;z-index:2;position:absolute;top:40%;right:0%;cursor:pointer">',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    centerMode: true,
                    arrows: true,
                    centerPadding: "0px",
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    arrows: true,
                    centerPadding: "0px",
                    slidesToShow: 1
                }
            }
        ]
    });
});
