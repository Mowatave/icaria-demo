window.onload = function() {
    document.body.style.opacity = "1";
};

$(document).ready(function() {

    var isMouseDown = false,
        startX,
        dragFactor = 0.05; // Ajusta este valor según la sensibilidad deseada

    $('.horizontal-slider').mousedown(function(e) {
        isMouseDown = true;
        startX = e.pageX - $(this).offset().left;
        return false; // previene la selección de texto
    });

    $(document).mousemove(function(e) {
        if (!isMouseDown) return;
        e.preventDefault();
        var x = e.pageX - $('.horizontal-slider').offset().left;
        $('.horizontal-slider').scrollLeft($('.horizontal-slider').scrollLeft() + (startX - x) * dragFactor);
    });

    $(document).mouseup(function() {
        isMouseDown = false;
    });

    $('.card').on('click', function() {
        var targetContent = $(this).data('target'); // Obtiene el selector del contenido a mostrar

        if (targetContent) {
            $('.main-content').hide(); // Oculta el main-content
            $(targetContent).show(); // Muestra el contenido correspondiente
        }
    });

    $('#vgi').click(function() {
        localStorage.clear();
        window.location.href = './forms/vgi.html';
    });

    $('#edc').click(function() {
        localStorage.clear();
        window.location.href = './forms/edc.html';
    });
});
