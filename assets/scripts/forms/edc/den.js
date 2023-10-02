$(document).ready(function() {

    // Create a dict where we assign each step with a bunch of images
    let images = [
        "/assets/imgs/edc/1.png",
        "/assets/imgs/edc/2.png",
        "/assets/imgs/edc/3.png",
        "/assets/imgs/edc/4.png",
        "/assets/imgs/edc/5.png",
        "/assets/imgs/edc/6.png",
    ];

    let selectedValues = {};
    let imagesHit = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
    }
    let currentImage = 0;
    let asserts = 0;

    function updateUI() {
        // Si currentImage es igual a la longitud de images, significa que se han calificado todas las imágenes.
        if(currentImage === images.length) {
            // Vacía el contenedor de imágenes.
            $('#image-container').empty();
            
            // Oculta el grader.
            $('#grader').css('opacity', '0');
            $('#ok-btn, #wrong-btn').prop('disabled', true);
            
            // Crea un nuevo botón con id submit-btn y añádelo al contenedor de imágenes.
            let $submitButton = $('<button>').attr('id', 'submit-btn').text('Finalizar').addClass('start-button');
            $('#image-container').append($submitButton);
            $('#image-container').addClass('d-flex justify-content-center align-items-center flex-column');
            $submitButton.on('click', function() {
                let currentStepIndex = parseInt(localStorage.getItem("currentStepIndex"));
        
                selectedValues[currentStepIndex - 1] = asserts;
                currentStepIndex++;
        
                localStorage.setItem("selectedValues", JSON.stringify(selectedValues));
                localStorage.setItem("currentStepIndex", currentStepIndex.toString());
                localStorage.setItem("imagesHit", JSON.stringify(imagesHit));
                window.location.href = "/forms/edc.html";
                return;
            });
        } else {
            $('#image-container').html('<img src="' + images[currentImage] + '" alt="Imagen"/>');
            $('#asserts').text(asserts);
        }
    }
    updateUI();

    $('#ok-btn, #wrong-btn').click(function () {
        if(this.id === 'ok-btn') {
            imagesHit[currentImage + 1] = true;
            asserts++;
        }
        currentImage++;
        updateUI();
    });
});