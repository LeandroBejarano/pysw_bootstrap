$(document).ready(function() {
    // 1. Setup: Contamos cuántos errores ocultos hay en el correo
    let totalErrores = $('.error-target').length;
    let erroresEncontrados = 0;

    // Inyectamos dinámicamente un contenedor para los mensajes al final del modal
    // Así no tenés que tocar el HTML de tu compañero
    if ($('#feedback-container').length === 0) {
        $('.modal-body').append('<div id="feedback-container" class="mt-4"></div>');
    }

    // 2. Interacción: Qué pasa cuando hacen clic en un error
    $('.error-target').on('click', function(e) {
        e.preventDefault();

        // Verificamos que no hayan hecho clic en este error antes (evita duplicar alertas)
        if (!$(this).hasClass('encontrado')) {
            // Marcamos como encontrado y sumamos al contador
            $(this).addClass('encontrado');
            erroresEncontrados++;

            // Efecto visual: Resaltamos el texto o el botón donde hicieron clic
            $(this).css({
                'background-color': '#ffcccc',
                'border': '2px dashed red',
                'padding': '2px',
                'border-radius': '4px',
                'color': '#dc3545' // Texto en rojo
            });

            // Capturamos el mensaje que dejó tu compañero
            let mensaje = $(this).data('msg');

            // 3. Feedback Dinámico: Mostramos la alerta de Bootstrap
            $('#feedback-container').prepend(`
                <div class="alert alert-warning alert-dismissible fade show shadow-sm" role="alert">
                    <i class="bi bi-exclamation-triangle-fill text-danger me-2"></i>
                    <strong>¡Señal de Phishing!</strong> ${mensaje}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `);

            // 4. Validación Simple: El sistema reacciona si encuentra todos los errores
            if (erroresEncontrados === totalErrores) {
                // Le damos un medio segundo de delay para que se lea natural
                setTimeout(function() {
                    $('#feedback-container').prepend(`
                        <div class="alert alert-success shadow-sm" role="alert">
                            <i class="bi bi-shield-check-fill text-success me-2"></i>
                            <strong>¡Análisis completado!</strong> Identificaste el ${totalErrores}/${totalErrores} de las amenazas en este correo. Ya podés cerrar el escáner.
                        </div>
                    `);
                }, 500);
            }
        }
    });
});