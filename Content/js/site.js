/* Animación tap puntos del navbar del móvil (submenú) */

var movilEscondido = true;

$(document).ready(function () {
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

    //PARALLAX
    var scene = $('#scene').get(0);
    var parallaxInstance = new Parallax(scene);

    //Contact Form
    var form = $("#my-form");
    $("#my-form").submit(      
        async function handleSubmit(event) {
            event.preventDefault();
            var status = $("#my-form-status");
            var data = new FormData(event.target);
            fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
            }).then(response => {
            status.innerHTML = "Thanks for your submission!";
            form.reset()
            }).catch(error => {
            status.innerHTML = "Oops! There was a problem submitting your form"
            });
    });
});