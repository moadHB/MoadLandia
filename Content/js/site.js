/* Animación tap puntos del navbar del móvil (submenú) */

var movilEscondido = true;

$("#lineas").css({ opacity: 0 });

//Mostrar menú
$("#puntos").click(
    function () {
        if (movilEscondido) {
            movilEscondido = false;
            $("#puntos").animate({ opacity: 0 }, 150);
            $("#lineas").css({ "z-index": 1 });
            $("#lineas").animate({ opacity: 1 }, 150);
            $(".dropdown-content-movil").css({ "max-height": "600px" });
            $(".home-wrapper").hide();
        }
    }
);

//Esconder de nuevo
$(document).click(function (e) {
    var menu = $(".dropdown-content-movil");
    var puntos = $("#puntos");

    if (!menu.is(e.target) && menu.has(e.target).length === 0 && !puntos.is(e.target) && puntos.has(e.target).length === 0 && !movilEscondido) {
        menu.css({ "max-height": "0vw" });
        $("#puntos").animate({ opacity: 1 }, 150);
        $("#lineas").css({ "z-index": -1 });
        $("#lineas").animate({ opacity: 0 }, 150);
        movilEscondido = true;
        $(".home-wrapper").fadeIn(1000);
    }
});
