$(document).ready(function() {
    let asserts = 0;

    let maxTime = 20; // 3 minutos en segundos
    let currentTime = 0;
    let intervalId;

    $('#start').click(function () {
        if (intervalId) {
            $('#ok-btn, #wrong-btn').prop('disabled', true);
            clearInterval(intervalId);
            intervalId = null;
            $(this).text('Reanudar');
        } else {
            $('#ok-btn, #wrong-btn').prop('disabled', false);
            intervalId = setInterval(function () {
                if (currentTime < maxTime) {
                    currentTime++;
                    let percentage = (currentTime / maxTime) * 100;
                    $('#progressBar').css('width', percentage + '%');
                    let minutes = Math.floor(currentTime / 60);
                    let seconds = currentTime % 60;
                    $('#time').text(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
                } else {
                    clearInterval(intervalId);
                    $('#start').text('Finalizar'); // Cambia el texto del botón cuando el temporizador llega a maxTime
                    $('#ok-btn, #wrong-btn').prop('disabled', true);
                    $('#start').click(function () {
                        let currentStepIndex = parseInt(localStorage.getItem("currentStepIndex"));
                        let selectedValues = JSON.parse(localStorage.getItem("selectedValues"));
                
                        selectedValues[currentStepIndex - 1] = asserts;
                        currentStepIndex++;
                
                        localStorage.setItem("selectedValues", JSON.stringify(selectedValues));
                        localStorage.setItem("currentStepIndex", currentStepIndex.toString());
                        window.location.href = "/forms/edc.html";
                        return;
                    });
                }
            }, 1000);
            $(this).text('Pausar');
        }
    });

    $('#ok-btn, #wrong-btn').click(function () {
        if(this.id === 'ok-btn') asserts++;
        $('#asserts').text(asserts);
    });
});