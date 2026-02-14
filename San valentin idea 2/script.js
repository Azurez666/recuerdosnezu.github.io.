document.addEventListener("DOMContentLoaded", function() {
    const cuadro = document.querySelector(".cuadro-pixel p");
    const texto = cuadro.innerHTML; // Guardar el texto original
    cuadro.innerHTML = ""; // Limpiar el contenido inicial

    let i = 0;
    const intervalo = setInterval(() => {
        cuadro.innerHTML += texto[i]; // Añadir un carácter
        i++;
        if (i >= texto.length) {
            clearInterval(intervalo); // Detener el intervalo al finalizar
        }
    }, 200); // Increased from 150 to slow down typing further

    const button = document.querySelector(".boton button");
    button.addEventListener("click", function() {
        window.location.href = "../segunda/segunda.html";
    });
});