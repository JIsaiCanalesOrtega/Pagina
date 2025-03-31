function redirigir(pagina) {
    window.location.href = pagina;  // Redirige a la página indicada
}

function changeBackground(rectClass) {
    // Selecciona el div cuyo fondo quieres usar
    var rect = document.querySelector('.' + rectClass);
    var backgroundUrl = window.getComputedStyle(rect).backgroundImage;

    // Cambia el fondo de la página
    document.body.style.backgroundImage = backgroundUrl;

    // Hacer que el div actual se quede con su opacidad y el texto visible
    var rects = document.querySelectorAll('.rect, .rect2, .rect3');
    rects.forEach(function(rectElement) {
        if (rectElement.classList.contains(rectClass)) {
            rectElement.classList.remove('transparent'); // Mantener el div actual visible
        } else {
            rectElement.classList.add('transparent'); // Reducir la opacidad de los otros divs
        }
    });
}

function resetBackground() {
    // Restablece el fondo de la página a su estado original solo si el mouse no está sobre ningún div
    var isAnyDivHovered = document.querySelectorAll('.rect:hover, .rect2:hover, .rect3:hover').length > 0;
    if (!isAnyDivHovered) {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#f4f4f4";  // o "white" si prefieres fondo blanco
        
    }

    // Restablece la opacidad de todos los divs
    var rects = document.querySelectorAll('.rect, .rect2, .rect3');
    rects.forEach(function(rectElement) {
        rectElement.classList.remove('transparent');
    });
}
