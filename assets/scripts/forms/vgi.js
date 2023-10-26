let selectedValues = {};

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
        "11. Dolor",
        "12. Pérdida de peso involuntaria",
        "13. Agresividad",
        "14. Control de la vejiga",
        "¡Ha completado su Test de valoración geriátrica!"
    ]

    // Create a dict where we assign each step with a bunch of images
    let images = {
        1: [
            "../assets/imgs/vgi/1/1.png",
            "../assets/imgs/vgi/1/2.png",
            "../assets/imgs/vgi/1/3.png",
            "../assets/imgs/vgi/1/4.png",
        ],
        2: [
            "../assets/imgs/vgi/2/1.png",
            "../assets/imgs/vgi/2/2.png",
            "../assets/imgs/vgi/2/3.png",
            "../assets/imgs/vgi/2/4.png",
        ],
        3: [
            "../assets/imgs/vgi/3/1.png",
            "../assets/imgs/vgi/3/2.png",
            "../assets/imgs/vgi/3/3.png",
            "../assets/imgs/vgi/3/4.png",
            "../assets/imgs/vgi/3/5.png",
            "../assets/imgs/vgi/3/6.png",
        ],
        4: [
            "../assets/imgs/vgi/4/1.png",
            "../assets/imgs/vgi/4/2.png",
            "../assets/imgs/vgi/4/3.png",
            "../assets/imgs/vgi/4/4.png",
            "../assets/imgs/vgi/4/5.png",
            "../assets/imgs/vgi/4/6.png",
        ],
        5: [
            "../assets/imgs/vgi/5/1.png",
            "../assets/imgs/vgi/5/2.png",
            "../assets/imgs/vgi/5/3.png",
            "../assets/imgs/vgi/5/4.png",
        ],
        6: [
            "../assets/imgs/vgi/6/1.png",
            "../assets/imgs/vgi/6/2.png",
            "../assets/imgs/vgi/6/3.png",
            "../assets/imgs/vgi/6/4.png",
            "../assets/imgs/vgi/6/5.png",
        ],
        7: [
            "../assets/imgs/vgi/7/1.png",
            "../assets/imgs/vgi/7/2.png",
            "../assets/imgs/vgi/7/3.png",
            "../assets/imgs/vgi/7/4.png",
            "../assets/imgs/vgi/7/4.png",
        ],
        8: [
            "../assets/imgs/vgi/8/1.png",
            "../assets/imgs/vgi/8/2.png",
            "../assets/imgs/vgi/8/3.png",
            "../assets/imgs/vgi/8/4.png",
            "../assets/imgs/vgi/8/5.png",
        ],
        9: [
            "../assets/imgs/vgi/9/1.png",
            "../assets/imgs/vgi/9/2.png",
            "../assets/imgs/vgi/9/3.png",
        ],
        10: [
            "../assets/imgs/vgi/10/1.png",
            "../assets/imgs/vgi/10/2.png",
            "../assets/imgs/vgi/10/3.png",
        ],
        11: [
            "../assets/imgs/vgi/11/1.png",
            "../assets/imgs/vgi/11/2.png",
            "../assets/imgs/vgi/11/3.png",
        ],
        12: [
            "../assets/imgs/vgi/12/1.png",
            "../assets/imgs/vgi/12/2.png",
            "../assets/imgs/vgi/12/3.png",
        ],
        13: [
            "../assets/imgs/vgi/13/1.png",
            "../assets/imgs/vgi/13/2.png",
            "../assets/imgs/vgi/13/3.png",
        ],
        14: [
            "../assets/imgs/vgi/14/1.png",
            "../assets/imgs/vgi/14/2.png",
            "../assets/imgs/vgi/14/3.png",
        ],
    }

    console.log(steps.length)

    let currentStepIndex = 0;

    function updateImageContainer() {
        // Obtén el contenedor de imágenes
        let $imageContainer = $('#image-container');
        $imageContainer.empty();
        
        let currentStepImages = images[currentStepIndex + 1];
        if (currentStepImages && currentStepImages.length > 0) {
            currentStepImages.forEach(function (src, idx) {
                let $img = $('<img>').attr('src', src).addClass('step-image');
                let $div = $('<div>').addClass('step-image-container').attr('value', idx);
                $div.append($img);
                $imageContainer.append($div);
            });
        }
    }
    updateImageContainer();

    $('#next-btn').click(function () {
        if(currentStepIndex == steps.length-1){
            localStorage.setItem('selectedValues', JSON.stringify(selectedValues));
            localStorage.setItem('test', 'vgi');
            window.location.href = 'resultados.html';
            return;
        }

        currentStepIndex++;

        if (currentStepIndex < steps.length) {
            $('#step-container').text(steps[currentStepIndex]);
            updateImageContainer();
            if (currentStepIndex == steps.length-1){
                $('#next-btn').text('Ver resultados');
                $('#image-container').hide();
                $('.main-content').removeClass('justify-content-between');
                $('.main-content').addClass('justify-content-center');
                $('.close a').hide();
                return;
            }
            $('.step-image').removeClass('selected blurred');
            $('#next-btn').css('opacity', '0');
            $('#next-btn').prop('disabled', true);
        }
    });
    
    $(document).on('click', '.step-image-container', function() {
        selectedValues[currentStepIndex + 1] = $(this).attr('value');

        $(this).siblings().addClass('blurred');
        $(this).removeClass('blurred');

        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
        $('#next-btn').css('opacity', '1');
        $('#next-btn').prop('disabled', false);  
    });
});