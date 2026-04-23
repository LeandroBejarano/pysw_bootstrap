$(document).ready(function () {

    // Flip card
    $(".flip-card").click(function () {
        $(this).toggleClass("active");
    });

    // Rating de estrellas
    $(".rating i").click(function () {

        let value = $(this).data("value");
        let stars = $(this).parent().children("i");

        stars.removeClass("active");

        stars.each(function () {
            if ($(this).data("value") <= value) {
                $(this).addClass("active");
            }
        });

    });

});