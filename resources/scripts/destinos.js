$(".filtro").click(function () {

    let filtro = $(this).attr("data-filter");

    if (filtro === "all") {
        $(".destino").show();
    } else {
        $(".destino").hide();
        $("." + filtro).show();
    }

});