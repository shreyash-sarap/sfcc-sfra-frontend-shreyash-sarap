"use strict";

$(".slider-for").slick({
    slidesToShow: 1,
    asNavFor: ".slider-nav",
    arrows: true
});

$(".slider-nav").slick({
    centerMode: true,
    arrows: true,
    dots: true,
    centerPadding: "0px",
    slidesToShow: 3,
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
