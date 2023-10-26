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
            let src = `../../assets/imgs/vgi/${test}/${res}.png`; // Genera la URL de la imagen
            
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
            let src = `../../assets/imgs/vgi/${test}/${res}.png`; // Genera la URL de la imagen
            
            let $img = $('<img>').attr('src', src).addClass('step-image');
            let $div = $('<div>').addClass('step-image-container');
            $div.append($img);
            $worstResultsDiv.append($div); // Añadir al div "best-results"
        });

    } else {
        $('#results-edc').removeClass('hide-important');

        renderTable();
    }

    $('#download').click(function() {
        window.print();
    });

});

function renderTable() {
    let $table = $('#results-table');

    let images = {
        1: ["Juego", "Cartas"],
        2: ["Vehículo", "Coche"],
        3: ["Fruta", "Pera"],
        4: ["Inst. Musical", "Trompeta"],
        5: ["Prenda vestir", "Zapatos"],
        6: ["Cubierto", "Cuchara"],
    };
    let imagesHit = JSON.parse(localStorage.getItem('imagesHit'));

    $.each(images, function (index, value) {
        let hitSymbol = imagesHit[index] ? '1' : '0'; // Verifica si se ha acertado o no
        let $td;
        if (hitSymbol == '1') {
            $td = '<td class="text-success"><i class="fa-solid fa-check"></i></td>';
        }
        else {
            $td = '<td class="text-danger"><i class="fa-solid fa-xmark"></i></td>';
        }
        let newRow = `<tr>
                        <td>${value[0]}</td>
                        <td>${value[1]}</td>
                        ${$td}
                        <td>${getRandomSiNo()}</td>
                        <td>${getRandomSiNo()}</td>
                    </tr>`;
        $table.append(newRow); // Añade la nueva fila a la tabla
    });
}

function getRandomSiNo() {
    return Math.random() < 0.5 ? 'Sí' : 'No';
}