$("#comment").keyup(function() {
    var charLength = $(this).val().length;
    var charLimit = $(this).attr("size");

    var charLeft = charLimit - charLength;
    $("#remaining-chars").html("You have " + charLeft + " characters left out of " + charLimit + ".");
});
