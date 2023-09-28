$(document).ready(function() {

    $('#results-vgi').addClass('hide-important');
    $('#results-edc').addClass('hide-important');

    // Si no hay contenido en el localStorage redirige al usuario a la página de inicio
    if (!localStorage.getItem('selectedValues')) {
        window.location.href = '/';
        return;
    }

    // Dependiendo del tipo de test, se obtienen los valores de los resultados
    let test = localStorage.getItem('test');
    let selectedValues = JSON.parse(localStorage.getItem('selectedValues'));

    if(test === 'vgi'){
        $('#results-vgi').removeClass('hide-important');

        let img = $('<img>').attr('src', '/assets/imgs/resultados/spiderGraph.png');
        $('.spider-graph').append(img);

        let sortedValues = Object.entries(selectedValues).sort((a, b) => a[1] - b[1]);
        let bestResults = sortedValues.slice(0, 4); // Los 4 menores valores
        let $bestResultsDiv = $('.best-results');
        bestResults.forEach(value => {
            let test = value[0];
            let res = parseInt(value[1])+1;
            let src = `/assets/imgs/vgi/${test}/${res}.png`; // Genera la URL de la imagen
            
            let $img = $('<img>').attr('src', src).addClass('step-image');
            let $div = $('<div>').addClass('step-image-container');
            $div.append($img);
            $bestResultsDiv.append($div); // Añadir al div "best-results"
        });

        let worstResults = sortedValues.slice(-4); // Los 4 mayores valores
        let $worstResultsDiv = $('.worst-results');
        worstResults.forEach(value => {
            let test = value[0];
            let res = parseInt(value[1]) + 1;
            let src = `/assets/imgs/vgi/${test}/${res}.png`; // Genera la URL de la imagen
            
            let $img = $('<img>').attr('src', src).addClass('step-image');
            let $div = $('<div>').addClass('step-image-container');
            $div.append($img);
            $worstResultsDiv.append($div); // Añadir al div "best-results"
        });

    } else {
        console.log(selectedValues);
        $('#results-edc').removeClass('hide-important');

    }

    $('#download').click(function() {
        window.print();
    });

});