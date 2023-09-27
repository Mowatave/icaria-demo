$(document).ready(function() {

    let steps = [
        "1. Estado de ánimo",
        "2. Número de medicamentos prescritos",
        "3. Movilidad",
        "4. Función",
        "5. Equilibrio",
        "6. Círculo social",
        "7. Cansancio diruno",
        "8. Memoria y pensamiento",
        "9. Visión",
        "10. Capacidad auditiva",
    ]

    // Create a dict where we assign each step with a bunch of images
    let images = {
        1: [
            "/assets/imgs/vgi/1/1.png",
            "/assets/imgs/vgi/1/2.png",
            "/assets/imgs/vgi/1/3.png",
            "/assets/imgs/vgi/1/4.png",
        ],
        2: [
            "/assets/imgs/vgi/2/1.png",
            "/assets/imgs/vgi/2/2.png",
            "/assets/imgs/vgi/2/3.png",
            "/assets/imgs/vgi/2/4.png",
        ],
        3: [
            "/assets/imgs/vgi/3/1.png",
            "/assets/imgs/vgi/3/2.png",
            "/assets/imgs/vgi/3/3.png",
            "/assets/imgs/vgi/3/4.png",
            "/assets/imgs/vgi/3/5.png",
            "/assets/imgs/vgi/3/6.png",
        ],
        4: [
            "/assets/imgs/vgi/4/1.png",
            "/assets/imgs/vgi/4/2.png",
            "/assets/imgs/vgi/4/3.png",
            "/assets/imgs/vgi/4/4.png",
            "/assets/imgs/vgi/4/5.png",
            "/assets/imgs/vgi/4/6.png",
        ],
        5: [
            "/assets/imgs/vgi/5/1.png",
            "/assets/imgs/vgi/5/2.png",
            "/assets/imgs/vgi/5/3.png",
            "/assets/imgs/vgi/5/4.png",
        ],
        6: [
            "/assets/imgs/vgi/6/1.png",
            "/assets/imgs/vgi/6/2.png",
            "/assets/imgs/vgi/6/3.png",
            "/assets/imgs/vgi/6/4.png",
            "/assets/imgs/vgi/6/5.png",
        ],
        7: [
            "/assets/imgs/vgi/7/1.png",
            "/assets/imgs/vgi/7/2.png",
            "/assets/imgs/vgi/7/3.png",
            "/assets/imgs/vgi/7/4.png",
            "/assets/imgs/vgi/7/4.png",
        ],
        8: [
            "/assets/imgs/vgi/8/1.png",
            "/assets/imgs/vgi/8/2.png",
            "/assets/imgs/vgi/8/3.png",
            "/assets/imgs/vgi/8/4.png",
            "/assets/imgs/vgi/8/5.png",
        ],
        9: [
            "/assets/imgs/vgi/9/1.png",
            "/assets/imgs/vgi/9/2.png",
            "/assets/imgs/vgi/9/3.png",
        ],
        10: [
            "/assets/imgs/vgi/10/1.png",
            "/assets/imgs/vgi/10/2.png",
            "/assets/imgs/vgi/10/3.png",
        ],
    }

    let currentStepIndex = 0;

    function updateImageContainer() {
        // Obtén el contenedor de imágenes
        let $imageContainer = $('#image-container');
        
        // Vacía el contenedor de imágenes
        $imageContainer.empty();
        
        // Obtén las imágenes del paso actual
        let currentStepImages = images[currentStepIndex + 1];
        
        // Si hay imágenes para este paso, créalas y añádelas al contenedor
        if (currentStepImages && currentStepImages.length > 0) {
            currentStepImages.forEach(function (src) {
                let $img = $('<img>').attr('src', src).addClass('step-image');
                $imageContainer.append($img);
            });
        }
    }
    updateImageContainer();

    $('#next-btn').click(function () {
        currentStepIndex++;
        
        if (currentStepIndex < steps.length) {
            $('#step-container').text(steps[currentStepIndex]);
            updateImageContainer();
        } else {
            alert('Formulario completado!');
        }
    });
});