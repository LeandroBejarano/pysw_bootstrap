const textos = ["Explorá el mundo", "Descubrí lugares", "Viví aventuras"];
let i = 0;


// Animación de texto sección hero
setInterval(() => {
    $("#hero-text").fadeOut(500, function () {
        $(this).text(textos[i]).fadeIn(500);
    });
    i = (i + 1) % textos.length;
}, 3000);

// Contador de viajeros y destinos
$(".counter").each(function () {
    let $this = $(this);
    let target = +$this.attr("data-target");

    $({ count: 0 }).animate({ count: target }, {
        duration: 2000,
        step: function (now) {
            $this.text(Math.floor(now));
        }
    });
});