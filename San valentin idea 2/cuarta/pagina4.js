const mensaje = `No sé qué pasará después...

pero todos estos momentos
ya forman parte de mí...`;

let i = 0;
const velocidad = 45; // velocidad de escritura

function escribirTexto() {
    if (i < mensaje.length) {
        document.getElementById("texto").innerHTML += mensaje.charAt(i);
        i++;
        setTimeout(escribirTexto, velocidad);
    }
}

window.onload = escribirTexto;

// Botón siguiente página
function irSiguiente() {
    window.location.href = "../quinta/pagina5.html";
}
