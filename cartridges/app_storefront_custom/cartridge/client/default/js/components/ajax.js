function getFilterModal() {
    var htmlString =
        "<!-- Modal -->" +
        '<div class="modal fade" id="filter-modal" role="dialog">' +
        "<!-- Modal content-->" +
        '<div class="modal-content">' +
        '<div class="modal-header"></div>' +
        '<div class="modal-body"></div>' +
        '<div class="modal-footer">' +
        '<button id="close-button" type="button" class="btn btn-close" data-dismiss="modal" aria-label="Close">Close</button>' +
        "</div>" +
        "</div>" +
        "</div>";
    $("body").append(htmlString);
}

$(getFilterModal());
$("#close-button").on("click", function() {
    $("#filter-modal").hide();
    $("body > .modal-backdrop").hide();
});

$("#ajax-filter").on("click", function() {
    $("#filter-modal").on("show.bs.modal", function() {
        var inputToPrint = $("#sample-text").val();
        $(".modal-header").prepend("<h1>Awesome Filter</h1>");
        $(".modal-body").append("You searched for: " + inputToPrint);
    });
});
