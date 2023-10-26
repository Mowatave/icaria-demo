let selectedValues = {};

$(document).ready(function() {

    let steps = [
        "Test de Fotos",
        "Fluidez Verbal (FH/FM)",
        "Fluidez Verbal (FH/FM)",
        "Recuerdo",
        "Recuerdo",
    ]

    let stepsInfo = {
        1: [
            "Muestre al paciente la pantalla con la imagen y pídale que la nombre.",
            "Marque si la respuesta es correcta o errónea. En caso de respuesta errónea, indíquele el nombre correcto.",
        ],
        2: [
            "Pídale al paciente que diga todos los nombres del sexo contrario al suyo que recuerde.",
            "Active el temporizador tras el primer nombre. Sume un punto por cada nombre, no puntué los nombres similares."
        ],
        3: [
            "Pídale al paciente que diga todos los nombres de su mismo sexo que recuerde.",
            "Active el temporizador tras el primer nombre. Sume un punto por cada nombre, no puntué los nombres similares."
        ],
        4: [
            "Recuerdo Libre (RL), recuerda qué fotos habla en la lámina que le enseñé antes",
            "(Máximo 20 segundos); dé 2 puntos por cada  respuesta correcta.",
        ],
        5: [
            "Recuerdo Facilitado (RF): Ofrecerle como pista y ayuda la “categoría” de las imágenes que NO haya recordado espontáneamente anteriormente.",
            "Por ejemplo: “También había una fruta, ¿la recuerda?”. Dé 1 punto por cada respuesta correcta."
        ]
    }

    let stepsUrl = {
        1: "edc/den.html",
        2: "edc/timer.html",
        3: "edc/timer.html",
        4: "edc/timer.html",
        5: "edc/timer.html",
    }

    function updateContent(stepIndex) {
        $("#step-container").text(stepIndex + ". " + steps[stepIndex - 1]);
        
        let infoContent = stepsInfo[stepIndex].join(' '); // Une las descripciones con un espacio
        $("#main").text(infoContent);
    }

    let currentStepIndex = localStorage.getItem("currentStepIndex") || 1;
    if(currentStepIndex == 1) {
        localStorage.setItem("currentStepIndex", currentStepIndex.toString());
        localStorage.setItem("selectedValues", JSON.stringify(selectedValues));
    } else if(currentStepIndex == 6) {
        localStorage.setItem('test', 'edc');
        window.location.href = 'resultados.html';
        return;
    }
        
    updateContent(currentStepIndex);

    $("#next-btn").click(function() {
        let url = stepsUrl[currentStepIndex];
        if (url) window.location.href = url;
        return;
    });

});