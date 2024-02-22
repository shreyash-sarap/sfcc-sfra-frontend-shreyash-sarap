// Created a function to show the coupon code form after clicking on it.
$(".promo-code-form").hide();

$(".couponCodeFormShow").on("click", function() {
    $(".promo-code-form").show();
    $(".couponCodeFormShow").hide();
});