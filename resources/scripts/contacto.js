$(document).ready(function () {
    $("#email").on("input", function () {
        // Validación de email en tiempo real
        let value = $(this).val().trim();
        let error = $(this).next(".error");
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (value === "") {
            error.text("Este campo es obligatorio");
            $(this).addClass("error-input").removeClass("valid");
        }
        else if (!regex.test(value)) {
            error.text("Email inválido");
            $(this).addClass("error-input").removeClass("valid");
        }
        else {
            error.text("");
            $(this).removeClass("error-input").addClass("valid");
        }

    });

    $("#formContacto").submit(function (e) {
        e.preventDefault();
        let valido = true;
        $("#formContacto input, #formContacto textarea").each(function () {
            let value = $(this).val().trim();
            let error = $(this).next(".error");
            if (value === "") {
                error.text("Este campo es obligatorio");
                $(this).addClass("error-input");
                valido = false;
                return;
            }
            if ($(this).attr("id") === "email") {
                let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!regex.test(value)) {
                    error.text("Email inválido");
                    $(this).addClass("error-input");
                    valido = false;
                }
            }
        });

        // Modal de error
        if (!valido) {
            let modal = new bootstrap.Modal(document.getElementById('modalError'));
            modal.show();
            return;
        }

        // Spinner de carga y modal de éxito
        $("#spinner").show();
        setTimeout(() => {
            $("#spinner").hide();
            let modal = new bootstrap.Modal(document.getElementById('modalOk'));
            modal.show();
            $("#formContacto")[0].reset();
            $(".valid").removeClass("valid");
        }, 2000);

    });

});